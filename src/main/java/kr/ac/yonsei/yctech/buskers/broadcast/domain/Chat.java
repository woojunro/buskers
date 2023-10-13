package kr.ac.yonsei.yctech.buskers.broadcast.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;


@Entity
@AllArgsConstructor
@Getter
@Table(name="chats_table")
public class Chat {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name="broadcast_id")
    private Broadcast broadcast;

    @ManyToOne
    @JoinColumn(name="channel_id")
    private Channel channel;

    @CreationTimestamp
    private LocalDateTime created_at;

    @Column(name = "content")
    private String content;

    public Chat(){
        super();
    }
    public Chat(Broadcast broadcast, Channel channel, String content){
        this.broadcast = broadcast;
        this.channel = channel;
        this.content = content;
    }

    public Long getId() {
        return id;
    }
}