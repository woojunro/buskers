package kr.ac.yonsei.yctech.buskers.auth.controller;

import kr.ac.yonsei.yctech.buskers.auth.dto.AuthToken;
import kr.ac.yonsei.yctech.buskers.auth.dto.OAuthDto;
import kr.ac.yonsei.yctech.buskers.auth.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthControllerV1 {

    private final AuthService authService;

    private ResponseCookie generateCookie(String name, String value, String path) {
        return ResponseCookie.from(name, value)
                .httpOnly(true)
                .path(path)
                .build();
    }

    @PostMapping("/login/google")
    public ResponseEntity<AuthToken> loginWithGoogle(@RequestBody OAuthDto oAuthDto) {
        AuthToken authToken = authService.signInWithGoogle(
                oAuthDto.token(),
                oAuthDto.redirectUri()
        );

        return ResponseEntity.ok()
                .header(
                        HttpHeaders.SET_COOKIE,
                        generateCookie(
                                "access-token",
                                authToken.accessToken(),
                                "/").toString()
                )
                .header(
                        HttpHeaders.SET_COOKIE,
                        generateCookie(
                                "refresh-token",
                                authToken.refreshToken(),
                                "/api/v1/auth/refresh").toString()
                )
                .body(authToken);
    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthToken> refreshAuthToken(@CookieValue("refresh-token") String refreshToken) {
        AuthToken authToken = authService.refreshAuthToken(refreshToken);

        return ResponseEntity.ok()
                .header(
                        HttpHeaders.SET_COOKIE,
                        generateCookie(
                                "access-token",
                                authToken.accessToken(),
                                "/").toString()
                )
                .header(
                        HttpHeaders.SET_COOKIE,
                        generateCookie(
                                "refresh-token",
                                authToken.refreshToken(),
                                "/api/v1/auth/refresh").toString()
                )
                .body(authToken);
    }

}
