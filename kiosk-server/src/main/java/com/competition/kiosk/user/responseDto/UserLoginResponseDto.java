package com.competition.kiosk.user.responseDto;


import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class UserLoginResponseDto {
    private String token;
    private String nickname;
    private int totalStampCnt;

    public static UserLoginResponseDto of(String token, String username, int totalStampCnt) {
        return new UserLoginResponseDto(token, username, totalStampCnt);
    }
}
