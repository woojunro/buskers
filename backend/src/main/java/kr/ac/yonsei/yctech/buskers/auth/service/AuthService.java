package kr.ac.yonsei.yctech.buskers.auth.service;

import kr.ac.yonsei.yctech.buskers.auth.GoogleOAuthProvider;
import kr.ac.yonsei.yctech.buskers.auth.JwtTokenProvider;
import kr.ac.yonsei.yctech.buskers.auth.domain.RefreshToken;
import kr.ac.yonsei.yctech.buskers.auth.dto.AuthToken;
import kr.ac.yonsei.yctech.buskers.auth.repository.RefreshTokenRepository;
import kr.ac.yonsei.yctech.buskers.user.domain.Member;
import kr.ac.yonsei.yctech.buskers.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final RefreshTokenRepository refreshTokenRepository;
    private final GoogleOAuthProvider googleOAuthProvider;
    private final UserService userService;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;

    @Transactional
    public AuthToken signInWithGoogle(String code, String redirectUri) {
        String email = googleOAuthProvider.getGoogleEmail(code, redirectUri);
        Optional<Member> userByEmail = userService.getUserByEmail(email);
        Member user = userByEmail.orElse(userService.createUser(email, "oauth"));

        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(email, "oauth");
        Authentication authentication =
                authenticationManagerBuilder.getObject().authenticate(token);
        AuthToken authToken = jwtTokenProvider.generateToken(authentication);

        RefreshToken refreshToken = RefreshToken.builder()
                .token(authToken.refreshToken())
                .user(user)
                .build();
        refreshTokenRepository.save(refreshToken);

        return authToken;
    }

}
