package kr.ac.yonsei.yctech.buskers.broadcast.domain;

import jakarta.persistence.*;
import kr.ac.yonsei.yctech.buskers.user.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.UUID;


@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    @JoinColumn(name="broadcastId")
    private Broadcast broadcast;

    @ManyToOne
    @JoinColumn(name="userId")
    private User user;

    @CreatedDate
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private String content;
}