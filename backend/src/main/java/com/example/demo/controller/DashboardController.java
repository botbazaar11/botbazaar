package com.example.demo.controller;

import com.example.demo.repository.ConversationRepository;
import com.example.demo.repository.OrderRepository;
import com.example.demo.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {
    
    @Autowired
    private BusinessService businessService;
    
    @Autowired
    private ConversationRepository conversationRepository;
    
    @Autowired
    private OrderRepository orderRepository;
    
    @GetMapping("/{businessId}/stats")
    public ResponseEntity<?> getDashboardStats(@PathVariable Long businessId) {
        try {
            LocalDateTime today = LocalDateTime.now().withHour(0).withMinute(0).withSecond(0);
            
            Long conversationsToday = conversationRepository.countByBusinessIdAndTimestampAfter(businessId, today);
            Long ordersToday = orderRepository.countByBusinessIdAndCreatedAtAfter(businessId, today);
            
            return ResponseEntity.ok(Map.of(
                "success", true,
                "data", Map.of(
                    "conversationsToday", conversationsToday,
                    "ordersToday", ordersToday,
                    "autoResolvedRate", 88, // Mock data - calculate from actual resolved conversations
                    "newLeads", 8 // Mock data - implement lead tracking
                )
            ));
        } catch (Exception e) {
            return ResponseEntity.status(500)
                .body(Map.of("success", false, "message", e.getMessage()));
        }
    }
    
    @GetMapping("/{businessId}/orders")
    public ResponseEntity<?> getRecentOrders(@PathVariable Long businessId) {
        try {
            var orders = orderRepository.findByBusinessIdOrderByCreatedAtDesc(businessId);
            return ResponseEntity.ok(Map.of("success", true, "data", orders));
        } catch (Exception e) {
            return ResponseEntity.status(500)
                .body(Map.of("success", false, "message", e.getMessage()));
        }
    }
}
