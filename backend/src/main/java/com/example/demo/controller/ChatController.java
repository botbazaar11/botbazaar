package com.example.demo.controller;

import com.example.demo.dto.ChatRequest;
import com.example.demo.model.Conversation;
import com.example.demo.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "*")
public class ChatController {
    
    @Autowired
    private ChatService chatService;
    
    @PostMapping("/message")
    public ResponseEntity<?> sendMessage(@RequestBody ChatRequest request) {
        try {
            Conversation conversation = chatService.processMessage(request);
            return ResponseEntity.ok(Map.of(
                "success", true,
                "botResponse", conversation.getBotResponse(),
                "conversationId", conversation.getId()
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("success", false, "message", e.getMessage()));
        }
    }
    
    @GetMapping("/history/{businessId}")
    public ResponseEntity<?> getChatHistory(@PathVariable Long businessId) {
        try {
            List<Conversation> conversations = chatService.getConversationsByBusiness(businessId);
            return ResponseEntity.ok(Map.of("success", true, "data", conversations));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("success", false, "message", e.getMessage()));
        }
    }
    
    @GetMapping("/recent/{businessId}")
    public ResponseEntity<?> getRecentChats(
        @PathVariable Long businessId,
        @RequestParam(defaultValue = "24") int hours
    ) {
        try {
            List<Conversation> conversations = chatService.getRecentConversations(businessId, hours);
            Long count = chatService.getConversationCount(businessId, hours);
            return ResponseEntity.ok(Map.of(
                "success", true, 
                "data", conversations,
                "count", count
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("success", false, "message", e.getMessage()));
        }
    }
}
