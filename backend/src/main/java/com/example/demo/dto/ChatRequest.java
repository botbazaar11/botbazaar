package com.example.demo.dto;

public class ChatRequest {
    private Long businessId;
    private String customerPhone;
    private String customerName;
    private String message;
    
    // Getters and Setters
    public Long getBusinessId() { return businessId; }
    public void setBusinessId(Long businessId) { this.businessId = businessId; }
    
    public String getCustomerPhone() { return customerPhone; }
    public void setCustomerPhone(String customerPhone) { this.customerPhone = customerPhone; }
    
    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }
    
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
