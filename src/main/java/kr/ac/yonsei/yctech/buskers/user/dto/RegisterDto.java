package kr.ac.yonsei.yctech.buskers.user.dto;

public record RegisterDto(
        String email,
        String password,
        String name
) {
}
