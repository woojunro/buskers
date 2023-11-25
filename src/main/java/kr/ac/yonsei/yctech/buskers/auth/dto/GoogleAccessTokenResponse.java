package kr.ac.yonsei.yctech.buskers.auth.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GoogleAccessTokenResponse {
    private String access_token;
    private long expires_in;
    private String refresh_token;
    private String scope;
    private String token_type;
}
