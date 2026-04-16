package com.example.demo.service;

import com.example.demo.dto.ChatRequest;
import com.example.demo.model.Business;
import com.example.demo.model.Conversation;
import com.example.demo.repository.ConversationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ChatService {
    
    @Autowired
    private ConversationRepository conversationRepository;
    
    @Autowired
    private BusinessService businessService;
    
    @Autowired
    private AIService aiService;
    
    public Conversation processMessage(ChatRequest request) {
        Business business = businessService.getBusinessById(request.getBusinessId())
                .orElseThrow(() -> new RuntimeException("Business not found"));
        
        // Generate AI response
        String botResponse = aiService.generateBotResponse(
            business, 
            request.getMessage(), 
            request.getCustomerName()
        );
        
        // Save conversation
        Conversation conversation = new Conversation();
        conversation.setBusiness(business);
        conversation.setCustomerPhone(request.getCustomerPhone());
        conversation.setCustomerName(request.getCustomerName());
        conversation.setMessage(request.getMessage());
        conversation.setBotResponse(botResponse);
        conversation.setMessageType(Conversation.MessageType.CUSTOMER);
        conversation.setTimestamp(LocalDateTime.now());
        conversation.setResolved(true);
        
        return conversationRepository.save(conversation);
    }
    
    public List<Conversation> getConversationsByBusiness(Long businessId) {
        return conversationRepository.findByBusinessIdOrderByTimestampDesc(businessId);
    }
    
    public List<Conversation> getRecentConversations(Long businessId, int hours) {
        LocalDateTime since = LocalDateTime.now().minusHours(hours);
        return conversationRepository.findByBusinessIdAndTimestampAfter(businessId, since);
    }
    
    public Long getConversationCount(Long businessId, int hours) {
        LocalDateTime since = LocalDateTime.now().minusHours(hours);
        return conversationRepository.countByBusinessIdAndTimestampAfter(businessId, since);
    }
}
