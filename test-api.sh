#!/bin/bash

# BotBazaar API Test Script
# Tests all major endpoints

API_URL="http://localhost:8080/api"

echo "🤖 BotBazaar API Test Suite"
echo "=============================="
echo ""

# Test 1: Create Business
echo "📝 Test 1: Creating a new business..."
BUSINESS_RESPONSE=$(curl -s -X POST "$API_URL/business/setup" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sharma Medical Store",
    "type": "Pharmacy",
    "openTime": "09:00",
    "closeTime": "21:00",
    "closedDays": "Sundays",
    "products": "Dolo 650 - Rs30, Cough Syrup - Rs120, Vicks Inhaler - Rs45",
    "instructions": "Always reply in Hinglish. Accept UPI only. Delivery within 5km.",
    "whatsappNumber": "+919876543210",
    "ownerEmail": "sharma@example.com"
  }')

echo "$BUSINESS_RESPONSE" | jq '.'
BUSINESS_ID=$(echo "$BUSINESS_RESPONSE" | jq -r '.businessId')
echo "✅ Business created with ID: $BUSINESS_ID"
echo ""

# Test 2: Get Business Details
echo "📋 Test 2: Fetching business details..."
curl -s "$API_URL/business/$BUSINESS_ID" | jq '.'
echo "✅ Business details retrieved"
echo ""

# Test 3: Send Chat Message
echo "💬 Test 3: Sending customer message..."
CHAT_RESPONSE=$(curl -s -X POST "$API_URL/chat/message" \
  -H "Content-Type: application/json" \
  -d "{
    \"businessId\": $BUSINESS_ID,
    \"customerPhone\": \"+919876543210\",
    \"customerName\": \"Rajesh Kumar\",
    \"message\": \"Bhai, Dolo 650 milegi? Aur price kya hai?\"
  }")

echo "$CHAT_RESPONSE" | jq '.'
echo "✅ AI response generated"
echo ""

# Test 4: Get Chat History
echo "📜 Test 4: Fetching chat history..."
curl -s "$API_URL/chat/history/$BUSINESS_ID" | jq '.'
echo "✅ Chat history retrieved"
echo ""

# Test 5: Get Dashboard Stats
echo "📊 Test 5: Fetching dashboard stats..."
curl -s "$API_URL/dashboard/$BUSINESS_ID/stats" | jq '.'
echo "✅ Dashboard stats retrieved"
echo ""

# Test 6: Toggle Bot Status
echo "🔄 Test 6: Toggling bot status..."
curl -s -X POST "$API_URL/business/$BUSINESS_ID/toggle-bot" \
  -H "Content-Type: application/json" \
  -d '{"active": false}' | jq '.'
echo "✅ Bot status toggled"
echo ""

echo "=============================="
echo "✨ All tests completed!"
echo ""
echo "Next steps:"
echo "1. Open http://localhost:5173 for the frontend"
echo "2. Open http://localhost:8080/h2-console for database"
echo "3. Check backend/README.md for more API examples"
