package com.competition.kiosk.user;

import com.competition.kiosk.config.BaseException;
import com.competition.kiosk.exception.ErrorCode;
import com.competition.kiosk.user.requestDto.UserLoginRequestDto;
import com.competition.kiosk.user.requestDto.UserSignInRequestDto;
import com.competition.kiosk.user.responseDto.UserJoinResponseDto;
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

    public User loadUserByUserName(String nickname) {
        return userRepository.findByNickname(nickname).map(User::fromEntity).orElseThrow(() ->
                        new BaseException(ErrorCode.USER_NOT_FOUND));
    }
    public UserJoinResponseDto signIn(UserSignInRequestDto requestDto) {
        userRepository.findByNickname(requestDto.getNickname())
                .ifPresent(name -> {
                    throw new BaseException(ErrorCode.DUPLICATED_USERNAME);
                });
        // TODO: 비밀번호 해싱 도입 예정
        requestDto.hashing(encoder.encode(requestDto.getPassword()));

        UserEntity user = UserEntity.of(requestDto);
        userRepository.save(user);
        return UserJoinResponseDto.of(user);
    }

    public String login(UserLoginRequestDto requestDto) {
        // id 검증
        User user = loadUserByUserName(requestDto.getNickname());
        // password 대조
        if (!encoder.matches(requestDto.getPassword(), user.getPassword())) {
            throw new BaseException(ErrorCode.INVALID_PASSWORD);
        }

        // 로그인 성공
        return JwtTokenUtils.generateToken(requestDto.getNickname(), secretKey, expiredTimeMs);
    }
}
