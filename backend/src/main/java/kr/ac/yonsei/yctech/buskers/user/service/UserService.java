package kr.ac.yonsei.yctech.buskers.user.service;

import kr.ac.yonsei.yctech.buskers.user.domain.Member;
import kr.ac.yonsei.yctech.buskers.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public Optional<Member> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Member createUser(String email, String password) {
        String encodedPassword = passwordEncoder.encode(password);

        Member user = Member.builder()
                .email(email)
                .password(encodedPassword)
                .roles(List.of("USER"))
                .build();

        return userRepository.save(user);
    }

}
