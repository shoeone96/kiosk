package com.competition.kiosk.user.requestDto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Getter
@NoArgsConstructor
public class UserSignInRequestDto {
    private String nickname;
    private String password;
    private String phoneNumber;

    public void hashing(String hashedPassword) {
        this.password = hashedPassword;
    }
}
