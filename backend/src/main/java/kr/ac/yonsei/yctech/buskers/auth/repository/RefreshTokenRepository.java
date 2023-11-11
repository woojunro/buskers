package kr.ac.yonsei.yctech.buskers.auth.repository;

import kr.ac.yonsei.yctech.buskers.auth.domain.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, UUID> {
}
