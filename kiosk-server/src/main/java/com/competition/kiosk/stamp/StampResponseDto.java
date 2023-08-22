package com.competition.kiosk.stamp;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class StampResponseDto {

    private int stampCnt;

    public static StampResponseDto fromEntity(int stampCnt) {
        return new StampResponseDto(stampCnt);
    }
}
