package kr.ac.yonsei.yctech.buskers.broadcast.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;


@Entity
@AllArgsConstructor
@Table(name="broadcasts_table")
public class Broadcast {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name="channel_id")
    private Channel channel;

    @Column(name="title")
    private String title;
    @Column(name="description")
    private String description;
    @CreationTimestamp
    private LocalDateTime startedAt;
    @UpdateTimestamp
    private LocalDateTime endedAt;
    @Column(name="view_count")
    private int view_count;
    @Column(name="clap_count")
    private int clap_count;
    @Column(name="stream_url")
    private String stream_url;

    public Broadcast(){
        super();
    }
    public Broadcast(Channel channel, String title, String description, String stream_url){
        this.channel = channel;
        this.title = title;
        this.description = description;
        this.stream_url = stream_url;
    }

    public Long getId() {
        return id;
    }
}
