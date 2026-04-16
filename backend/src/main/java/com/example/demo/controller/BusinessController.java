package com.example.demo.controller;

import com.example.demo.dto.BusinessSetupRequest;
import com.example.demo.model.Business;
import com.example.demo.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/business")
@CrossOrigin(origins = "*")
public class BusinessController {
    
    @Autowired
    private BusinessService businessService;
    
    @PostMapping("/setup")
    public ResponseEntity<?> setupBusiness(@RequestBody BusinessSetupRequest request) {
        try {
            Business business = businessService.createBusiness(request);
            return ResponseEntity.ok(Map.of(
                "success", true,
                "message", "Business setup successful",
                "businessId", business.getId(),
                "data", business
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("success", false, "message", e.getMessage()));
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> getBusiness(@PathVariable Long id) {
        return businessService.getBusinessById(id)
            .map(business -> ResponseEntity.ok(Map.of("success", true, "data", business)))
            .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("success", false, "message", "Business not found")));
    }
    
    @GetMapping("/all")
    public ResponseEntity<?> getAllBusinesses() {
        List<Business> businesses = businessService.getAllBusinesses();
        return ResponseEntity.ok(Map.of("success", true, "data", businesses));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<?> updateBusiness(@PathVariable Long id, @RequestBody BusinessSetupRequest request) {
        Business updated = businessService.updateBusiness(id, request);
        if (updated != null) {
            return ResponseEntity.ok(Map.of("success", true, "data", updated));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .body(Map.of("success", false, "message", "Business not found"));
    }
    
    @PostMapping("/{id}/toggle-bot")
    public ResponseEntity<?> toggleBot(@PathVariable Long id, @RequestBody Map<String, Boolean> payload) {
        try {
            boolean active = payload.getOrDefault("active", false);
            businessService.toggleBotStatus(id, active);
            return ResponseEntity.ok(Map.of(
                "success", true, 
                "message", active ? "Bot activated" : "Bot deactivated"
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("success", false, "message", e.getMessage()));
        }
    }
}
