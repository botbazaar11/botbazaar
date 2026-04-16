package com.example.demo.service;

import com.example.demo.model.Business;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

import java.util.Map;
import java.util.List;

@Service
public class AIService {
    
    private final RestTemplate restTemplate = new RestTemplate();
    private static final String GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
    private static final String GROQ_API_KEY = System.getenv("GROQ_API_KEY"); // Set via environment variable
    
    public String generateBotResponse(Business business, String customerMessage, String customerName) {
        String systemPrompt = buildSystemPrompt(business);
        
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.setBearerAuth(GROQ_API_KEY != null ? GROQ_API_KEY : "");
            
            Map<String, Object> requestBody = Map.of(
                "model", "llama-3.3-70b-versatile",
                "messages", List.of(
                    Map.of("role", "system", "content", systemPrompt),
                    Map.of("role", "user", "content", customerMessage)
                ),
                "temperature", 0.7,
                "max_tokens", 500
            );
            
            HttpEntity<Map<String, Object>> request = new HttpEntity<>(requestBody, headers);
            ResponseEntity<Map> response = restTemplate.postForEntity(GROQ_API_URL, request, Map.class);
            
            if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
                Map<String, Object> body = response.getBody();
                List<Map<String, Object>> choices = (List<Map<String, Object>>) body.get("choices");
                if (choices != null && !choices.isEmpty()) {
                    Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
                    return (String) message.get("content");
                }
            }
        } catch (Exception e) {
            System.err.println("Error calling Groq API: " + e.getMessage());
            return getFallbackResponse(business, customerMessage);
        }
        
        return getFallbackResponse(business, customerMessage);
    }
    
    private String buildSystemPrompt(Business business) {
        StringBuilder prompt = new StringBuilder();
        prompt.append("You are an AI assistant for ").append(business.getName());
        prompt.append(", a ").append(business.getType()).append(" business in India.\n\n");
        
        prompt.append("Business Hours: ").append(business.getOpenTime())
              .append(" to ").append(business.getCloseTime());
        if (business.getClosedDays() != null && !business.getClosedDays().isEmpty()) {
            prompt.append(". Closed on: ").append(business.getClosedDays());
        }
        prompt.append("\n\n");
        
        if (business.getProducts() != null && !business.getProducts().isEmpty()) {
            prompt.append("Products/Services:\n").append(business.getProducts()).append("\n\n");
        }
        
        if (business.getInstructions() != null && !business.getInstructions().isEmpty()) {
            prompt.append("Special Instructions:\n").append(business.getInstructions()).append("\n\n");
        }
        
        prompt.append("Your role:\n");
        prompt.append("- Answer customer queries about products, prices, and availability\n");
        prompt.append("- Be friendly, helpful, and professional\n");
        prompt.append("- Use simple Hindi-English mix (Hinglish) when appropriate\n");
        prompt.append("- Help customers place orders by collecting necessary details\n");
        prompt.append("- Keep responses concise and actionable\n");
        prompt.append("- Use emojis sparingly to keep it friendly\n");
        
        return prompt.toString();
    }
    
    private String getFallbackResponse(Business business, String message) {
        String lowerMsg = message.toLowerCase();
        
        if (lowerMsg.contains("price") || lowerMsg.contains("cost") || lowerMsg.contains("kitne")) {
            return "Please check our product list for pricing details. You can also call us directly for the latest prices. 📞";
        }
        
        if (lowerMsg.contains("order") || lowerMsg.contains("buy") || lowerMsg.contains("chahiye")) {
            return "Great! To place an order, please share:\n1. Product name\n2. Quantity\n3. Delivery address\n\nWe'll confirm and deliver soon! 🚚";
        }
        
        if (lowerMsg.contains("timing") || lowerMsg.contains("open") || lowerMsg.contains("khula")) {
            return "We're open from " + business.getOpenTime() + " to " + business.getCloseTime() + 
                   (business.getClosedDays() != null ? ". Closed on " + business.getClosedDays() : "") + " ⏰";
        }
        
        return "Thank you for contacting " + business.getName() + "! 🙏\n\n" +
               "How can we help you today? Feel free to ask about our products, prices, or place an order.";
    }
}
