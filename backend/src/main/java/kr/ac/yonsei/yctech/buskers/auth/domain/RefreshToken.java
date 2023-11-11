package kr.ac.yonsei.yctech.buskers.auth.domain;

import jakarta.persistence.*;
import kr.ac.yonsei.yctech.buskers.user.domain.Member;
import lombok.*;

import java.util.UUID;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class RefreshToken {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false, unique = true)
    private String token;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Member user;

}
