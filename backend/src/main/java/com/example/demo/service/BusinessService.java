package com.example.demo.service;

import com.example.demo.dto.BusinessSetupRequest;
import com.example.demo.model.Business;
import com.example.demo.repository.BusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class BusinessService {
    
    @Autowired
    private BusinessRepository businessRepository;
    
    public Business createBusiness(BusinessSetupRequest request) {
        Business business = new Business();
        business.setName(request.getName());
        business.setType(request.getType());
        business.setOpenTime(request.getOpenTime());
        business.setCloseTime(request.getCloseTime());
        business.setClosedDays(request.getClosedDays());
        business.setProducts(request.getProducts());
        business.setInstructions(request.getInstructions());
        business.setWhatsappNumber(request.getWhatsappNumber());
        business.setOwnerEmail(request.getOwnerEmail());
        business.setBotActive(true);
        business.setCreatedAt(LocalDateTime.now());
        business.setUpdatedAt(LocalDateTime.now());
        
        return businessRepository.save(business);
    }
    
    public Optional<Business> getBusinessById(Long id) {
        return businessRepository.findById(id);
    }
    
    public Optional<Business> getBusinessByWhatsappNumber(String whatsappNumber) {
        return businessRepository.findByWhatsappNumber(whatsappNumber);
    }
    
    public List<Business> getAllBusinesses() {
        return businessRepository.findAll();
    }
    
    public Business updateBusiness(Long id, BusinessSetupRequest request) {
        Optional<Business> existing = businessRepository.findById(id);
        if (existing.isPresent()) {
            Business business = existing.get();
            business.setName(request.getName());
            business.setType(request.getType());
            business.setOpenTime(request.getOpenTime());
            business.setCloseTime(request.getCloseTime());
            business.setClosedDays(request.getClosedDays());
            business.setProducts(request.getProducts());
            business.setInstructions(request.getInstructions());
            business.setUpdatedAt(LocalDateTime.now());
            return businessRepository.save(business);
        }
        return null;
    }
    
    public void toggleBotStatus(Long id, boolean active) {
        Optional<Business> existing = businessRepository.findById(id);
        if (existing.isPresent()) {
            Business business = existing.get();
            business.setBotActive(active);
            business.setUpdatedAt(LocalDateTime.now());
            businessRepository.save(business);
        }
    }
}
