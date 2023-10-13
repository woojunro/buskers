package kr.ac.yonsei.yctech.buskers.auth.controller;

import kr.ac.yonsei.yctech.buskers.auth.dto.LoginDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthControllerV1 {

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDto loginDto) {
        return ResponseEntity.ok().body("login");
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout() {
        return ResponseEntity.ok().body("logout");
    }

    @PostMapping("/refresh")
    public ResponseEntity<String> refreshAccessToken() {
        return ResponseEntity.ok().body("refresh access token");
    }
}
