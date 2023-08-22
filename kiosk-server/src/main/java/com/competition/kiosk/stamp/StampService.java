package com.competition.kiosk.stamp;

import com.competition.kiosk.config.BaseException;
import com.competition.kiosk.exception.ErrorCode;
import com.competition.kiosk.user.UserEntity;
import com.competition.kiosk.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class StampService {

    private final UserRepository userRepository;
    private final StampRepository stampRepository;
    public StampResponseDto getStampCnt(String name) {
        UserEntity user = userRepository.findByNickname(name)
                .orElseThrow(() -> new BaseException(ErrorCode.USER_NOT_FOUND));
        return StampResponseDto.fromEntity(user.getStampCnt());
    }
}
