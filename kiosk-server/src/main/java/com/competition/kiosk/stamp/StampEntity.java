package com.competition.kiosk.stamp;

import com.competition.kiosk.stamp.requestDto.AccumulationRequestDto;
import com.competition.kiosk.stamp.requestDto.CouponChangeRequestDto;
import com.competition.kiosk.stamp.requestDto.TimeChangeRequestDto;
import com.competition.kiosk.user.UserEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "stamp")
public class StampEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "stampId")
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId")
    private UserEntity user;
    @CreatedDate
    private LocalDateTime registeredAt;
    private int changeCnt;
    private int totalCnt;
    @Enumerated(value = EnumType.STRING)
    private Usages usages;

    private StampEntity(UserEntity user, TimeChangeRequestDto requestDto, int lastTotalCnt){
        this.user = user;
        this.changeCnt = requestDto.getChangeCnt();
        this.registeredAt = LocalDateTime.now();
        this.totalCnt = lastTotalCnt - changeCnt;
        this.usages = Usages.VOLUNTEER_TIME;
    }

    public static StampEntity fromTimeRequestDto(UserEntity user, TimeChangeRequestDto requestDto, int lastTotalCnt){
        return new StampEntity(user, requestDto, lastTotalCnt);
    }

    private StampEntity(UserEntity user, CouponChangeRequestDto requestDto, int lastTotalCnt){
        this.user = user;
        this.changeCnt = requestDto.getChangeCnt();
        this.registeredAt = LocalDateTime.now();
        this.totalCnt = lastTotalCnt - changeCnt;
        this.usages = Usages.DISCOUNT_COUPON;
    }

    public static StampEntity fromCouponRequestDto(UserEntity user, CouponChangeRequestDto requestDto, int lastTotalCnt){
        return new StampEntity(user, requestDto, lastTotalCnt);
    }

    private StampEntity(UserEntity user, AccumulationRequestDto requestDto, int lastTotalCnt){
        this.user = user;
        this.changeCnt = requestDto.getChangeCnt();
        this.registeredAt = LocalDateTime.now();
        this.totalCnt = lastTotalCnt + changeCnt;
        this.usages = Usages.ACCUMULATION;
    }

    public static StampEntity fromAccumulationRequestDto(UserEntity user, AccumulationRequestDto requestDto, int lastTotalCnt){
        return new StampEntity(user, requestDto, lastTotalCnt);
    }
}
