package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/setup")
@CrossOrigin(origins = "*")
public class BotConfigController {

    @PostMapping
    public ResponseEntity<Map<String, String>> saveBotConfig(@RequestBody Map<String, Object> configData) {
        System.out.println("Saving bot config: " + configData);
        // TODO: Save to H2 Database
        
        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Bot configuration saved and AI model is training.");
        
        return ResponseEntity.ok(response);
    }
}
