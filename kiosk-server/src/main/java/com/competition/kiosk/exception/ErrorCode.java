package com.competition.kiosk.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

// 에러코드 나타날 시 구분할 수 있는 클래스 생성
@Getter
@AllArgsConstructor
public enum ErrorCode {

    DUPLICATED_USERNAME(HttpStatus.CONFLICT, "User name is duplicated"),
    INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "Internal server error"),
    USER_NOT_FOUND(HttpStatus.NOT_FOUND, "User not founded"),
    INVALID_PASSWORD(HttpStatus.UNAUTHORIZED, "Password is invalid"),

    INVALID_TOKEN(HttpStatus.UNAUTHORIZED, "Token is invalid"),

    // post 수정 관련 에러 코드
    POST_NOT_FOUND(HttpStatus.NOT_FOUND, "Post not founded"),
    INVALID_PERMISSION(HttpStatus.UNAUTHORIZED, "Permission id invalid"),
    ALREADY_LIKED(HttpStatus.CONFLICT, "User already liked post");



    private HttpStatus status;
    private String message;
}
