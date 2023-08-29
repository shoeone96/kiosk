package com.competition.kiosk.stamp;

import com.competition.kiosk.config.BaseResponse;
import com.competition.kiosk.stamp.requestDto.AccumulationRequestDto;
import com.competition.kiosk.stamp.requestDto.CouponChangeRequestDto;
import com.competition.kiosk.stamp.requestDto.TimeChangeRequestDto;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Getter
@RestController
@RequiredArgsConstructor
public class StampController {
    private final StampService stampService;
    @GetMapping("api/v1/stamps")
    public BaseResponse<StampResponseDto> getStampCnt(Authentication authentication){
        return BaseResponse.success(stampService.getStampCnt(authentication.getName()));
    }

    @PostMapping("api/v1/stamps/time")
    public BaseResponse<Void> changeToTime(Authentication authentication, @RequestBody TimeChangeRequestDto requestDto){
        stampService.changeToTime(authentication.getName(), requestDto);
        return BaseResponse.success();
    }

    @PostMapping("api/v1/stamps/coupon")
    public BaseResponse<Void> changeToCoupon(Authentication authentication, @RequestBody CouponChangeRequestDto requestDto){
        stampService.changeToCoupon(authentication.getName(), requestDto);
        return BaseResponse.success();
    }

    @PostMapping("api/v1/stamps/accumulate")
    public BaseResponse<Void> changeToTime(Authentication authentication, @RequestBody AccumulationRequestDto requestDto){
        stampService.saveStamp(authentication.getName(), requestDto);
        return BaseResponse.success();
    }
}
