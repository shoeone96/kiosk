package com.competition.kiosk.config;


import lombok.AllArgsConstructor;
import lombok.Getter;



@Getter
@AllArgsConstructor
public class BaseResponse<T> {
    private String resultCode;
    private T result;

    public static BaseResponse<Void> error(String errorCode){
        return new BaseResponse<>(errorCode, null);
    }

    public static BaseResponse<Void> success(){
        return new BaseResponse<Void>("SUCCESS", null);
    }
    public static <T> BaseResponse<T> success(T result){
        return new BaseResponse<>("SUCCESS", result);
    }
    public String toStream() {
        if(result == null){
            return "{" +
                    "\"resultCode\":" + "\"" + resultCode + "\"" + "\n" +
                    "\"result\":" + null + "}";
        }
        return "{" +
                "\"resultCode\":" + "\"" + resultCode + "\"" + "\n" +
                "\"result\":" + "\"" + result + "\"" + "}";
    }

}

