package com.competition.kiosk.user.responseDto;

import com.competition.kiosk.user.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class UserJoinResponseDto {
    private String nickname;

    public static UserJoinResponseDto of(UserEntity user) {
        return new UserJoinResponseDto(user.getNickname());
    }
}
