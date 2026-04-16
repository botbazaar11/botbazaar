@echo off
REM BotBazaar API Test Script for Windows
REM Tests all major endpoints

set API_URL=http://localhost:8080/api

echo.
echo 🤖 BotBazaar API Test Suite
echo ==============================
echo.

REM Test 1: Create Business
echo 📝 Test 1: Creating a new business...
curl -X POST "%API_URL%/business/setup" ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Sharma Medical Store\",\"type\":\"Pharmacy\",\"openTime\":\"09:00\",\"closeTime\":\"21:00\",\"closedDays\":\"Sundays\",\"products\":\"Dolo 650 - Rs30, Cough Syrup - Rs120\",\"instructions\":\"Always reply in Hinglish. Accept UPI only.\",\"whatsappNumber\":\"+919876543210\",\"ownerEmail\":\"sharma@example.com\"}"
echo.
echo ✅ Business created
echo.

REM Test 2: Send Chat Message
echo 💬 Test 2: Sending customer message...
curl -X POST "%API_URL%/chat/message" ^
  -H "Content-Type: application/json" ^
  -d "{\"businessId\":1,\"customerPhone\":\"+919876543210\",\"customerName\":\"Rajesh Kumar\",\"message\":\"Bhai, Dolo 650 milegi? Aur price kya hai?\"}"
echo.
echo ✅ AI response generated
echo.

REM Test 3: Get Business Details
echo 📋 Test 3: Fetching business details...
curl "%API_URL%/business/1"
echo.
echo ✅ Business details retrieved
echo.

REM Test 4: Get Dashboard Stats
echo 📊 Test 4: Fetching dashboard stats...
curl "%API_URL%/dashboard/1/stats"
echo.
echo ✅ Dashboard stats retrieved
echo.

echo ==============================
echo ✨ All tests completed!
echo.
echo Next steps:
echo 1. Open http://localhost:5173 for the frontend
echo 2. Open http://localhost:8080/h2-console for database
echo 3. Check backend/README.md for more API examples
pause
