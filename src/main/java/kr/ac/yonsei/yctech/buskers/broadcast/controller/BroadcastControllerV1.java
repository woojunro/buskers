package kr.ac.yonsei.yctech.buskers.broadcast.controller;

import kr.ac.yonsei.yctech.buskers.broadcast.domain.Broadcast;
import kr.ac.yonsei.yctech.buskers.broadcast.dto.CreateBroadcastDto;
import kr.ac.yonsei.yctech.buskers.broadcast.service.BroadcastService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/broadcasts")
@RequiredArgsConstructor
public class BroadcastControllerV1 {

    private final BroadcastService broadcastService;

    @GetMapping
    public ResponseEntity<List<Broadcast>> listOnAirBroadcast() {
        List<Broadcast> broadcastList = broadcastService.listOnAirBroadcast();
        return ResponseEntity.ok(broadcastList);
    }

    @PostMapping
    public ResponseEntity<Broadcast> createBroadcast(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestBody CreateBroadcastDto createBroadcastDto
    ) {
        Broadcast broadcast = broadcastService.createBroadcast(
                userDetails.getUsername(),
                createBroadcastDto.title(),
                createBroadcastDto.streamId()
        );

        return ResponseEntity.ok(broadcast);
    }

    @PutMapping("/{broadcastId}/end")
    public ResponseEntity<Broadcast> endBroadcast(@PathVariable("broadcastId") UUID broadcastId) {
        Broadcast broadcast = broadcastService.endBroadcast(broadcastId);
        return ResponseEntity.ok(broadcast);
    }

}
