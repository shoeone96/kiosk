package com.competition.kiosk.config.secret;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

// TODO: 해당 KEY 값들을 꼭 바꿔서 사용해주세요!
// TODO: .gitignore에 추가하는거 앚지 마세요!
@Component
@Getter
public class Secret {

    @Value("${jwt.key}")
    private String JWT_SECRET_KEY;

}
