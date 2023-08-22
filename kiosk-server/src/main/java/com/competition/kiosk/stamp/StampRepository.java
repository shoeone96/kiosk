package com.competition.kiosk.stamp;

import com.competition.kiosk.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StampRepository extends JpaRepository<StampEntity, Long> {
    Optional<StampEntity> findByUser(UserEntity user);

}
