package kr.ac.yonsei.yctech.buskers.auth;

import kr.ac.yonsei.yctech.buskers.auth.dto.GoogleAccessTokenResponse;
import kr.ac.yonsei.yctech.buskers.auth.dto.GoogleUserInfoResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Component
public class GoogleOAuthProvider {

    @Value("${oauth2.client.registration.google.client-id}")
    private String googleOAuthClientId;

    @Value("${oauth2.client.registration.google.client-secret}")
    private String googleOauthClientSecret;

    private String getGoogleAccessToken(String code, String redirectUri) {
        RestTemplate restTemplate = new RestTemplate();
        Map<String, String> params = new HashMap<>();

        params.put("client_id", googleOAuthClientId);
        params.put("client_secret", googleOauthClientSecret);
        params.put("code", code);
        params.put("grant_type", "authorization_code");
        params.put("redirect_uri", redirectUri);

        ResponseEntity<GoogleAccessTokenResponse> response = restTemplate.postForEntity(
                "https://oauth2.googleapis.com/token",
                params,
                GoogleAccessTokenResponse.class
        );

        if (response.getStatusCode() == HttpStatus.OK) {
            GoogleAccessTokenResponse body = response.getBody();
            if (body == null) return "";
            return body.getAccess_token();
        }
        return "";
    }

    public String getGoogleEmail(String code, String redirectUri) {
        RestTemplate restTemplate = new RestTemplate();
        String accessToken = getGoogleAccessToken(code, redirectUri);
        if (accessToken.isEmpty()) return "";

        ResponseEntity<GoogleUserInfoResponse> response = restTemplate.getForEntity(
                "https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + accessToken,
                GoogleUserInfoResponse.class
        );

        if (response.getStatusCode() == HttpStatus.OK) {
            GoogleUserInfoResponse body = response.getBody();
            if (body == null) return "";
            return body.getEmail();
        }
        return "";
    }

}
