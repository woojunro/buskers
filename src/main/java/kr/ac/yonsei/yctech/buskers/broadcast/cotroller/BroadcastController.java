package kr.ac.yonsei.yctech.buskers.broadcast.cotroller;

import kr.ac.yonsei.yctech.buskers.broadcast.dto.ChatDto;
import kr.ac.yonsei.yctech.buskers.broadcast.dto.BroadcastDto;
import kr.ac.yonsei.yctech.buskers.broadcast.dto.ClapDto;
import kr.ac.yonsei.yctech.buskers.broadcast.dto.UpdateBroadInfoDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/broadcasts")
public class BroadcastController {
    @PostMapping
    public ResponseEntity<String> postBroadcast(@RequestBody BroadcastDto broadcastDto){
        return ResponseEntity.ok().body("post broadcast");
    }
    @GetMapping
    public ResponseEntity<String> getBroadcastList(){
        return ResponseEntity.ok().body("get Broadcast list");
    }
    @GetMapping("/{broadcastId}")
    public ResponseEntity<String> getBroadInfo(@PathVariable(name="broadcastId") UUID broadcastId){
        return ResponseEntity.ok().body("get Broadcast Information with id: "+ broadcastId);
    }
    @PatchMapping("/{broadcastId}")
    public ResponseEntity<String> updateBroadInfo(
            @PathVariable UUID broadcastId,
            @RequestBody UpdateBroadInfoDto updateBroadInfoDto){
        return ResponseEntity.ok().body("update Broadcast information");
    }
    @PostMapping("/{broadcastId}/clap")
    public ResponseEntity<String> postClap(@PathVariable(name="broadcastId") UUID broadcastId,
                                           @RequestBody ClapDto clapDto){
        return ResponseEntity.ok().body("Clapping");
    }
    @PostMapping("/{broadcastId}/chats")
    public ResponseEntity<String> postChat(@PathVariable(name="broadcastId") UUID broadcastId,
                                           @RequestBody ChatDto chatDto){
        return ResponseEntity.ok().body("Chatting");
    }
    @GetMapping("/{broadcastId}/chats")
    public ResponseEntity<String> getChat(@PathVariable(name="broadcastId") UUID broadcastId){
        return ResponseEntity.ok().body("Get chat");
    }



}
