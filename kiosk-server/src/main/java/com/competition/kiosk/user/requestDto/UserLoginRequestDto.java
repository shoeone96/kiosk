package com.competition.kiosk.user.requestDto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserLoginRequestDto {
    private int phoneNumber;
    private String password;

}
