package com.competition.kiosk.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByNickname(String nickname);
    Optional<UserEntity> findByPhoneNumber(int phoneNumber);
}
