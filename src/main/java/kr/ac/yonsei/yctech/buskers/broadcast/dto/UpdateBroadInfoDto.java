package kr.ac.yonsei.yctech.buskers.broadcast.dto;

public record UpdateBroadInfoDto(
        String title,
        String description,
        int viewCount,
        int clapCount ) {
}
