package com.competition.kiosk.user;

import com.competition.kiosk.config.BaseException;
import com.competition.kiosk.exception.ErrorCode;
import com.competition.kiosk.stamp.StampEntity;
import com.competition.kiosk.stamp.StampRepository;
import com.competition.kiosk.user.requestDto.UserLoginRequestDto;
import com.competition.kiosk.user.requestDto.UserSignInRequestDto;
import com.competition.kiosk.user.responseDto.UserJoinResponseDto;
import com.competition.kiosk.user.responseDto.UserLoginResponseDto;
import com.competition.kiosk.utils.JwtTokenUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    @Value("${jwt.secret-key}")
    private String secretKey;
    @Value("${jwt.token.expired-time-ms}")
    private Long expiredTimeMs;
    private final BCryptPasswordEncoder encoder; // encoder 추가
    private final UserRepository userRepository;
    private final StampRepository stampRepository;

    public User loadUserByUserName(String nickname) {
        return userRepository.findByNickname(nickname).map(User::fromEntity).orElseThrow(() ->
                        new BaseException(ErrorCode.USER_NOT_FOUND));
    }

    public User loadUserByPhoneNumber(String phoneNumber) {
        return userRepository.findByPhoneNumber(phoneNumber).map(User::fromEntity).orElseThrow(() ->
                new BaseException(ErrorCode.USER_NOT_FOUND));
    }
    public UserJoinResponseDto signIn(UserSignInRequestDto requestDto) {
        userRepository.findByNickname(requestDto.getNickname())
                .ifPresent(name -> {
                    throw new BaseException(ErrorCode.DUPLICATED_USERNAME);
                });
        userRepository.findByPhoneNumber(requestDto.getPhoneNumber())
                .ifPresent(name -> {
                    throw new BaseException(ErrorCode.DUPLICATED_USERNAME);
                });
        requestDto.hashing(encoder.encode(requestDto.getPassword()));

        UserEntity user = UserEntity.of(requestDto);
        userRepository.save(user);

        // 추후 최초 가입 event 등 고려한 최초 가입 로직 작성, 조회 시 null 값 방지 포함
        StampEntity stampEntity = StampEntity.enrollService(user);
        stampRepository.save(stampEntity);
        return UserJoinResponseDto.of(user);
    }

    public UserLoginResponseDto login(UserLoginRequestDto requestDto) {
        // id 검증
        User user = loadUserByPhoneNumber(requestDto.getPhoneNumber());
        // password 대조
        if (!encoder.matches(requestDto.getPassword(), user.getPassword())) {
            throw new BaseException(ErrorCode.INVALID_PASSWORD);
        }

        // 로그인 성공
        String token =  JwtTokenUtils.generateToken(user.getUsername(), secretKey, expiredTimeMs);
        return UserLoginResponseDto.of(token, user.getUsername(),user.getStampCnt());
    }
}
