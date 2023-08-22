package com.competition.kiosk.stamp;

import com.competition.kiosk.config.BaseResponse;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
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
}
