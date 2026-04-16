package com.example.demo.repository;

import com.example.demo.model.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ConversationRepository extends JpaRepository<Conversation, Long> {
    List<Conversation> findByBusinessIdOrderByTimestampDesc(Long businessId);
    List<Conversation> findByBusinessIdAndTimestampAfter(Long businessId, LocalDateTime timestamp);
    Long countByBusinessIdAndTimestampAfter(Long businessId, LocalDateTime timestamp);
}
