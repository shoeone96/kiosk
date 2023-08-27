package com.competition.kiosk.stamp;

import com.competition.kiosk.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StampRepository extends JpaRepository<StampEntity, Long> {
    Optional<StampEntity> findByUser(UserEntity user);

    @Query("select stamp from StampEntity stamp where stamp.user = :user order by stamp.registeredAt desc limit 1")
    Optional<StampEntity> findLastStampData(@Param("user") UserEntity user);
}
