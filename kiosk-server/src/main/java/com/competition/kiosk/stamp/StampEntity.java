package com.competition.kiosk.stamp;

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
}
