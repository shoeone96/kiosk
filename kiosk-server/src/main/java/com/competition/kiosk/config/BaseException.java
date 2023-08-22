package com.competition.kiosk.config;

import com.competition.kiosk.exception.ErrorCode;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
public class BaseException extends RuntimeException {
    private ErrorCode errorCode;
    private String message;

    public BaseException(ErrorCode errorCode){
        this.errorCode = errorCode;
        this.message = null;
    }

    @Override
    public String getMessage() {
        if(message == null){
            return errorCode.getMessage();
        }
        return String.format("%s, %s", errorCode.getMessage(), message);
    }
}
