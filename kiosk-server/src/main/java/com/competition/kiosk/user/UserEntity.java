package com.competition.kiosk.user;

import com.competition.kiosk.user.requestDto.UserSignInRequestDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private Long id;
    private String nickname;
    private String password;
    private int phoneNumber;

    @Enumerated(value = EnumType.STRING)
    private UserRole userRole;
    private int stampCnt;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;
    private LocalDateTime deletedAt;

    @PrePersist
    void createdAt(){
        this.createdAt = LocalDateTime.now();
    }
    @PreUpdate
    void updatedAt(){
        this.modifiedAt = LocalDateTime.now();
    }


    public UserEntity (UserSignInRequestDto requestDto){
        this.nickname = requestDto.getNickname();
        this.password = requestDto.getPassword();
        this.phoneNumber = requestDto.getPhoneNumber();
        this.userRole = UserRole.USER;
        this.stampCnt = 0;
    }

    public static UserEntity of(UserSignInRequestDto requestDto){
        return new UserEntity(requestDto);
    }
}
