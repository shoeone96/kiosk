package com.competition;


import com.competition.kiosk.config.BaseException;
import com.competition.kiosk.config.BaseResponse;
import com.competition.kiosk.config.BaseResponseStatus;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@Slf4j
@ControllerAdvice
@AllArgsConstructor
public class globalExceptionHandler {

    @ExceptionHandler(BaseException.class)
    @ResponseBody
//    @ResponseStatus(HttpStatus.FOUND)
    public ResponseEntity<BaseResponse<Void>> handleMyException(BaseException ex){
        BaseResponseStatus status = ex.getStatus();
        HttpStatus httpStatus = ex.getStatus().getStatus();
        log.info(ex.getMessage());
        return ResponseEntity.status(httpStatus).body(BaseResponse.error(status));
    }
}
