package kr.ac.yonsei.yctech.buskers.broadcast.domain;

import jakarta.persistence.*;
import kr.ac.yonsei.yctech.buskers.common.domain.BaseEntity;
import kr.ac.yonsei.yctech.buskers.user.domain.Member;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Broadcast extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "host_id")
    private Member host;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String streamId;

    private LocalDateTime endedAt;

}
