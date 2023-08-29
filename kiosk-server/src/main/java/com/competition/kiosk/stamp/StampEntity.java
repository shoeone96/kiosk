package com.competition.kiosk.stamp;

import com.competition.kiosk.stamp.requestDto.AccumulationRequestDto;
import com.competition.kiosk.stamp.requestDto.CouponChangeRequestDto;
import com.competition.kiosk.stamp.requestDto.TimeChangeRequestDto;
import com.competition.kiosk.user.UserEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "stamps")
public class StampEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stamp_id")
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserEntity user;
    @CreatedDate
    private LocalDateTime registeredAt;
    private int changeCnt;
    private int totalCnt;
    @Enumerated(value = EnumType.STRING)
    private Usages usages;
    @PrePersist
    void registeredAt(){
        this.registeredAt = LocalDateTime.now();
    }
    private StampEntity(UserEntity user, TimeChangeRequestDto requestDto){
        this.user = user;
        this.changeCnt = requestDto.getChangeCnt();
        this.registeredAt = LocalDateTime.now();
        this.totalCnt = user.getStampCnt() - changeCnt;
        this.usages = Usages.VOLUNTEER_TIME;
    }

    private StampEntity(UserEntity user){
        this.user = user;
        this.changeCnt = 0;
        this.registeredAt = LocalDateTime.now();
        this.totalCnt = 0;
        this.usages = Usages.ENROLLMENT;
    }

    public static StampEntity enrollService(UserEntity user){
        return new StampEntity(user);
    }

    public static StampEntity fromTimeRequestDto(UserEntity user, TimeChangeRequestDto requestDto){
        return new StampEntity(user, requestDto);
    }

    private StampEntity(UserEntity user, CouponChangeRequestDto requestDto){
        this.user = user;
        this.changeCnt = requestDto.getChangeCnt();
        this.registeredAt = LocalDateTime.now();
        this.totalCnt = user.getStampCnt() - changeCnt;
        this.usages = Usages.DISCOUNT_COUPON;
    }

    public static StampEntity fromCouponRequestDto(UserEntity user, CouponChangeRequestDto requestDto){
        return new StampEntity(user, requestDto);
    }

    private StampEntity(UserEntity user, AccumulationRequestDto requestDto){
        this.user = user;
        this.changeCnt = requestDto.getChangeCnt();
        this.registeredAt = LocalDateTime.now();
        this.totalCnt = user.getStampCnt() + changeCnt;
        this.usages = Usages.ACCUMULATION;
    }

    public static StampEntity fromAccumulationRequestDto(UserEntity user, AccumulationRequestDto requestDto){
        return new StampEntity(user, requestDto);
    }
}
