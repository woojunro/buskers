package kr.ac.yonsei.yctech.buskers.user.controller;

import kr.ac.yonsei.yctech.buskers.user.dto.RegisterDto;
import kr.ac.yonsei.yctech.buskers.user.dto.UpdateUserDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/users")
public class UserControllerV1 {

    @GetMapping("/me")
    public ResponseEntity<String> getMe() {
        return ResponseEntity.ok().body("get me");
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {
        return ResponseEntity.ok().body("register");
    }

    @GetMapping("/{userId}")
    public ResponseEntity<String> getUser(@PathVariable UUID userId) {
        return ResponseEntity.ok().body("get user with id: " + userId);
    }

    @PatchMapping("/{userId}")
    public ResponseEntity<String> updateUser(
            @PathVariable UUID userId,
            @RequestBody UpdateUserDto updateUserDto
    ) {
        return ResponseEntity.ok().body("update user with id: " + userId);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable UUID userId) {
        return ResponseEntity.noContent().build();
    }
}
