package kr.ac.yonsei.yctech.buskers.auth.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GoogleUserInfoResponse {
    private String id;
    private String email;
    private boolean verified_email;
    private String picture;
}
