package kr.ac.yonsei.yctech.buskers.broadcast.service;

import kr.ac.yonsei.yctech.buskers.broadcast.domain.Broadcast;
import kr.ac.yonsei.yctech.buskers.broadcast.repository.BroadcastRepository;
import kr.ac.yonsei.yctech.buskers.common.exception.CustomException;
import kr.ac.yonsei.yctech.buskers.common.exception.ErrorCode;
import kr.ac.yonsei.yctech.buskers.user.domain.Member;
import kr.ac.yonsei.yctech.buskers.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class BroadcastService {

    private final BroadcastRepository broadcastRepository;
    private final UserRepository userRepository;

    public Broadcast createBroadcast(String email, String title, String streamId) {
        Optional<Member> member = userRepository.findByEmail(email);
        if (member.isEmpty()) {
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        }

        Member host = member.get();
        Broadcast broadcast = Broadcast.builder()
                .host(host)
                .title(title)
                .streamId(streamId)
                .build();
        return broadcastRepository.save(broadcast);
    }

    public List<Broadcast> listOnAirBroadcast() {
        return broadcastRepository.findByEndedAtIsNull();
    }

    public Broadcast endBroadcast(UUID broadcastId) {
        Optional<Broadcast> broadcastOptional = broadcastRepository.findById(broadcastId);
        if (broadcastOptional.isEmpty()) {
            throw new CustomException(ErrorCode.BROADCAST_NOT_FOUND);
        }

        Broadcast broadcast = broadcastOptional.get();
        Broadcast endedBroadcast = Broadcast.builder()
                .id(broadcast.getId())
                .host(broadcast.getHost())
                .title(broadcast.getTitle())
                .streamId(broadcast.getStreamId())
                .endedAt(LocalDateTime.now())
                .build();
        return broadcastRepository.save(endedBroadcast);
    }

}
