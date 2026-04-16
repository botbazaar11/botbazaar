package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/webhook")
public class WebhookController {

    // Verification endpoint for WhatsApp API
    @GetMapping
    public ResponseEntity<String> verifyWebhook(
            @RequestParam("hub.mode") String mode,
            @RequestParam("hub.verify_token") String token,
            @RequestParam("hub.challenge") String challenge) {
            
        // Hardcoded token for demo purposes
        String VERIFY_TOKEN = "botbazaar_secret_token";
        
        if ("subscribe".equals(mode) && VERIFY_TOKEN.equals(token)) {
            return ResponseEntity.ok(challenge);
        } else {
            return ResponseEntity.status(403).build();
        }
    }

    // Endpoint to receive WhatsApp messages
    @PostMapping
    public ResponseEntity<Void> receiveMessage(@RequestBody String payload) {
        System.out.println("Received WhatsApp Payload: " + payload);
        // TODO: Parse message, pass to Groq AI Service, and send reply back via WhatsApp API
        
        return ResponseEntity.ok().build();
    }
}
