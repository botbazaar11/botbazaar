package com.example.demo.repository;

import com.example.demo.model.Business;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BusinessRepository extends JpaRepository<Business, Long> {
    Optional<Business> findByWhatsappNumber(String whatsappNumber);
    Optional<Business> findByOwnerEmail(String ownerEmail);
}
