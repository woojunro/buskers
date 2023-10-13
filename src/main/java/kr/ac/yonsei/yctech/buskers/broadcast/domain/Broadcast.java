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
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
public class Broadcast {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    @JoinColumn(name="userId")
    private User user;

    @Column(nullable = false)
    private String title;

    private String description;

    @CreatedDate
    private LocalDateTime createdAt;

    private LocalDateTime endedAt;

    private Integer viewCount = 0;

    private Integer clapCount = 0;

    @OneToMany
    private List<Chat> chats = new ArrayList<>();
}
