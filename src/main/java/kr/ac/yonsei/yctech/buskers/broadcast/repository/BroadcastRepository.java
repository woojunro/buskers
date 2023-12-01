package kr.ac.yonsei.yctech.buskers.broadcast.repository;

import kr.ac.yonsei.yctech.buskers.broadcast.domain.Broadcast;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface BroadcastRepository extends JpaRepository<Broadcast, UUID> {
    List<Broadcast> findByEndedAtIsNull();
}
