package com.competition.kiosk.user;

import com.competition.kiosk.config.BaseResponse;
import com.competition.kiosk.user.requestDto.UserLoginRequestDto;
import com.competition.kiosk.user.requestDto.UserSignInRequestDto;
import com.competition.kiosk.user.responseDto.UserJoinResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/api/v1/users/join")
    public BaseResponse<UserJoinResponseDto> signIn(@RequestBody UserSignInRequestDto requestDto){
        return BaseResponse.success(userService.signIn(requestDto));
    }

    @PostMapping("/api/v1/users/login")
    public BaseResponse<String> userLogin(@RequestBody UserLoginRequestDto requestDto){
        return BaseResponse.success(userService.login(requestDto));
    }
}
