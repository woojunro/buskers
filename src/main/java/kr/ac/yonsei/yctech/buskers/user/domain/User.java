package kr.ac.yonsei.yctech.buskers.user.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;


@Entity
@Table(name="user_table")
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "channel_id", referencedColumnName = "id")
    private Channel channel;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @CreationTimestamp
    private LocalDateTime created_at;

    public User(){
        super();
    }

    public User(Channel channel,String email, String password) {
        this.channel = channel;
        this.email = email;
        this.password = password;
    }


    public String getEmail() {
        return email;
    }

    public Long getId() {
        return id;
    }
}
