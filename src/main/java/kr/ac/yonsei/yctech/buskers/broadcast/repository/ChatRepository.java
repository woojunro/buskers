package kr.ac.yonsei.yctech.buskers.broadcast.repository;

import kr.ac.yonsei.yctech.buskers.broadcast.domain.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepository extends JpaRepository<Chat, Long> {
}
