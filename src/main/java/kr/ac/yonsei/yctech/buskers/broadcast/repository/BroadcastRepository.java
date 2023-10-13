package kr.ac.yonsei.yctech.buskers.broadcast.repository;

import kr.ac.yonsei.yctech.buskers.broadcast.domain.Broadcast;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BroadcastRepository extends JpaRepository<Broadcast, Long> {
}
