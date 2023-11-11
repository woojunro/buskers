package kr.ac.yonsei.yctech.buskers.user.service;

import kr.ac.yonsei.yctech.buskers.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username)
                .map(user ->
                        User.builder()
                                .username(user.getUsername())
                                .password(user.getPassword())
                                .roles(Arrays.toString(user.getAuthorities().toArray()))
                                .build()
                )
                .orElseThrow(() -> new UsernameNotFoundException("User not found."));
    }

}
