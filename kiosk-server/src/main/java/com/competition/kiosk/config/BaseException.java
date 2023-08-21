package com.competition.kiosk.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
public class BaseException extends RuntimeException {
    private BaseResponseStatus status;
    private HttpStatus httpStatus;
    private String message;

    public BaseException(BaseResponseStatus status, String message){
        this.status = status;
        this.httpStatus = status.getStatus();
        this.message = message;
    }

    public BaseException(BaseResponseStatus status){
        this.status = status;
        this.httpStatus = status.getStatus();
    }
}
