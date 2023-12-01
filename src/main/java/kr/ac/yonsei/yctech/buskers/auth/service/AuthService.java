package kr.ac.yonsei.yctech.buskers.auth.service;

import kr.ac.yonsei.yctech.buskers.auth.GoogleOAuthProvider;
import kr.ac.yonsei.yctech.buskers.auth.JwtTokenProvider;
import kr.ac.yonsei.yctech.buskers.auth.domain.RefreshToken;
import kr.ac.yonsei.yctech.buskers.auth.dto.AuthToken;
import kr.ac.yonsei.yctech.buskers.auth.repository.RefreshTokenRepository;
import kr.ac.yonsei.yctech.buskers.common.exception.CustomException;
import kr.ac.yonsei.yctech.buskers.common.exception.ErrorCode;
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
        String email;

        try {
            email = googleOAuthProvider.getGoogleEmail(code, redirectUri);
        } catch (Exception e) {
            throw new CustomException(ErrorCode.INVALID_OAUTH_TOKEN);
        }

        if (email.isEmpty()) {
            throw new CustomException(ErrorCode.INVALID_OAUTH_TOKEN);
        }

        Optional<Member> userByEmail = userService.getUserByEmail(email);
        Member user = userByEmail.orElseGet(() -> userService.createUser(email, "oauth"));

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

    @Transactional
    public AuthToken refreshAuthToken(String refreshToken) {
        boolean isRefreshTokenValid = jwtTokenProvider.validateToken(refreshToken);
        if (!isRefreshTokenValid) {
            throw new CustomException(ErrorCode.INVALID_REFRESH_TOKEN);
        }

        Optional<RefreshToken> refresh = refreshTokenRepository.findByToken(refreshToken);
        if (refresh.isEmpty()) {
            throw new CustomException(ErrorCode.REFRESH_TOKEN_NOT_FOUND);
        }

        Member user = refresh.get().getUser();

        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(user.getUsername(), "oauth");
        Authentication authentication =
                authenticationManagerBuilder.getObject().authenticate(token);
        AuthToken authToken = jwtTokenProvider.generateToken(authentication);

        refreshTokenRepository.delete(refresh.get());

        RefreshToken newRefresh = RefreshToken.builder()
                .token(authToken.refreshToken())
                .user(user)
                .build();
        refreshTokenRepository.save(newRefresh);

        return authToken;
    }

}
