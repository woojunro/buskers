package kr.ac.yonsei.yctech.buskers.user.controller;

import kr.ac.yonsei.yctech.buskers.user.dto.UpdateUserPayload;
import kr.ac.yonsei.yctech.buskers.user.dto.UserInfo;
import kr.ac.yonsei.yctech.buskers.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserControllerV1 {

    private final UserService userService;

    @GetMapping("/me")
    public ResponseEntity<UserInfo> getCurrentUser(@AuthenticationPrincipal UserDetails userDetails) {
        UserInfo userInfo = userService.getUserInfo(userDetails.getUsername());
        return ResponseEntity.ok(userInfo);
    }

    @PatchMapping("/{userId}")
    public ResponseEntity<UserInfo> updateUser(
            @PathVariable("userId") Long userId,
            @RequestBody @Validated UpdateUserPayload updateUserPayload
    ) {
        UserInfo userInfo = userService.updateUser(userId, updateUserPayload.getName());
        return ResponseEntity.ok(userInfo);
    }

}
