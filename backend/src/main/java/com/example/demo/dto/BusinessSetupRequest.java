package com.example.demo.dto;

public class BusinessSetupRequest {
    private String name;
    private String type;
    private String openTime;
    private String closeTime;
    private String closedDays;
    private String products;
    private String instructions;
    private String whatsappNumber;
    private String ownerEmail;
    
    // Getters and Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    
    public String getOpenTime() { return openTime; }
    public void setOpenTime(String openTime) { this.openTime = openTime; }
    
    public String getCloseTime() { return closeTime; }
    public void setCloseTime(String closeTime) { this.closeTime = closeTime; }
    
    public String getClosedDays() { return closedDays; }
    public void setClosedDays(String closedDays) { this.closedDays = closedDays; }
    
    public String getProducts() { return products; }
    public void setProducts(String products) { this.products = products; }
    
    public String getInstructions() { return instructions; }
    public void setInstructions(String instructions) { this.instructions = instructions; }
    
    public String getWhatsappNumber() { return whatsappNumber; }
    public void setWhatsappNumber(String whatsappNumber) { this.whatsappNumber = whatsappNumber; }
    
    public String getOwnerEmail() { return ownerEmail; }
    public void setOwnerEmail(String ownerEmail) { this.ownerEmail = ownerEmail; }
}
