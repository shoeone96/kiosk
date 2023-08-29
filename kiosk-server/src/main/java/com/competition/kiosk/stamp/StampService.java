package com.competition.kiosk.stamp;

import com.competition.kiosk.config.BaseException;
import com.competition.kiosk.exception.ErrorCode;
import com.competition.kiosk.stamp.requestDto.AccumulationRequestDto;
import com.competition.kiosk.stamp.requestDto.CouponChangeRequestDto;
import com.competition.kiosk.stamp.requestDto.TimeChangeRequestDto;
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

    public void changeToTime(String name, TimeChangeRequestDto requestDto) {

        // User 찾기
        UserEntity user = userRepository.findByNickname(name)
                .orElseThrow(() -> new BaseException(ErrorCode.USER_NOT_FOUND));
        // stamp 기록 및 정보 업데이트
        StampEntity stamp = StampEntity.fromTimeRequestDto(user, requestDto);
        stampRepository.save(stamp);
        user.updateStampCnt(stamp.getTotalCnt());
    }

    public void changeToCoupon(String name, CouponChangeRequestDto requestDto) {

        // User 찾기
        UserEntity user = userRepository.findByNickname(name)
                .orElseThrow(() -> new BaseException(ErrorCode.USER_NOT_FOUND));
        // stamp 기록 및 정보 업데이트
        StampEntity stamp = StampEntity.fromCouponRequestDto(user, requestDto);
        stampRepository.save(stamp);
        user.updateStampCnt(stamp.getTotalCnt());
    }

    public void saveStamp(String name, AccumulationRequestDto requestDto) {

        // User 찾기
        UserEntity user = userRepository.findByNickname(name)
                .orElseThrow(() -> new BaseException(ErrorCode.USER_NOT_FOUND));
        // stamp 기록 및 정보 업데이트
        StampEntity stamp = StampEntity.fromAccumulationRequestDto(user, requestDto);
        stampRepository.save(stamp);
        user.updateStampCnt(stamp.getTotalCnt());
    }
}
