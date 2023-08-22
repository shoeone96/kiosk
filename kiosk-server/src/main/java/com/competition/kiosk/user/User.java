package com.competition.kiosk.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

// 상황에 따라 데이터를 주고받을 dto 생성
@Getter
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class User implements UserDetails {

    private Long id;
    private String username;
    private String password;
    private UserRole userRole;
    private LocalDateTime registeredAt;
    private LocalDateTime updatedAt;
    private LocalDateTime deletedAt;


    public static User fromEntity(UserEntity userEntity){
        return new User(
                userEntity.getId(),
                userEntity.getNickname(),
                userEntity.getPassword(),
                userEntity.getUserRole(),
                userEntity.getCreatedAt(),
                userEntity.getModifiedAt(),
                userEntity.getDeletedAt()
        );
    }

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(this.getUserRole().toString()));
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return this.deletedAt == null;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonLocked() {
        return this.deletedAt == null;
    }

    @Override
    @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return this.deletedAt == null;
    }

    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return this.deletedAt == null;
    }
}
