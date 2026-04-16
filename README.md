# 🤖 BotBazaar - AI WhatsApp Chatbot Builder for Indian SMBs

**Your shop. Never sleeps.**

BotBazaar is a dead-simple AI-powered WhatsApp chatbot builder designed specifically for Indian small businesses. Set up in 10 minutes, no coding required.

## 🎯 What It Does

- **24/7 AI Customer Support** - Automatic replies in Hindi & English
- **Order Taking** - Customers can place orders directly via WhatsApp
- **Appointment Booking** - Automated scheduling for salons, clinics, etc.
- **Product Queries** - Instant answers about prices, availability, and more
- **Smart Dashboard** - Track conversations, orders, and analytics

## 🚀 Tech Stack

### Frontend
- **React 19** + TypeScript
- **Vite** - Lightning-fast build tool
- **React Router** - Client-side routing
- Responsive design with modern CSS

### Backend
- **Java 17** + Spring Boot 4.0.5
- **Spring Data JPA** - Database ORM
- **H2 Database** - In-memory (dev), PostgreSQL (prod)
- **Groq AI API** - LLaMA 3.3 70B for intelligent responses

### AI Integration
- **Groq Cloud** - Ultra-fast LLM inference
- Context-aware responses based on business data
- Fallback logic for offline scenarios

## 📁 Project Structure

```
botbazaar/
├── frontend/              # React + TypeScript frontend
│   ├── src/
│   │   ├── pages/        # Landing, Setup, Dashboard
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
│
├── backend/              # Spring Boot REST API
│   ├── src/main/java/com/example/demo/
│   │   ├── controller/   # REST endpoints
│   │   ├── service/      # Business logic
│   │   ├── model/        # JPA entities
│   │   ├── repository/   # Data access
│   │   └── dto/          # Request/Response objects
│   └── build.gradle
│
├── README.md             # Main documentation
├── QUICKSTART.md         # Setup guide
├── DEPLOYMENT.md         # Deploy guide
└── PROJECT_SUMMARY.md    # Project overview
```

## 🛠️ Setup & Installation

### Prerequisites
- **Node.js** 18+ (for frontend)
- **Java 17+** (for backend)
- **Groq API Key** (free at https://console.groq.com/keys)

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd botbazaar
```

### 2. Backend Setup
```bash
cd backend

# Set your Groq API key
export GROQ_API_KEY=your_groq_api_key_here

# Run the backend
./gradlew bootRun
```

Backend runs at: **http://localhost:8080**

### 3. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Frontend runs at: **http://localhost:5173**

### 4. Test the Application

Open http://localhost:5173 in your browser and explore:
- Landing page with pricing and features
- Setup wizard (click "Start Free")
- Dashboard (after completing setup)

## 📡 API Endpoints

### Business Management
- `POST /api/business/setup` - Create new business
- `GET /api/business/{id}` - Get business details
- `PUT /api/business/{id}` - Update business
- `POST /api/business/{id}/toggle-bot` - Activate/deactivate bot

### Chat & Messaging
- `POST /api/chat/message` - Send customer message, get AI response
- `GET /api/chat/history/{businessId}` - Get conversation history
- `GET /api/chat/recent/{businessId}` - Get recent chats

### Dashboard
- `GET /api/dashboard/{businessId}/stats` - Get analytics
- `GET /api/dashboard/{businessId}/orders` - Get recent orders

## 🧪 Testing the AI Bot

```bash
# Example: Send a message to the bot
curl -X POST http://localhost:8080/api/chat/message \
  -H "Content-Type: application/json" \
  -d '{
    "businessId": 1,
    "customerPhone": "+919876543210",
    "customerName": "Rajesh",
    "message": "Do you have Dolo 650?"
  }'
```

## 🎯 Pricing Plans

| Plan | Price | Features |
|------|-------|----------|
| **Free** | ₹0/mo | 50 replies/month, 1 WhatsApp number |
| **Pro** | ₹299/mo | Unlimited replies, order taking, appointments |
| **Business** | ₹999/mo | 5 numbers, team inbox, CRM integration |

## 🚧 Roadmap

- [x] Landing page with responsive design
- [x] Bot setup wizard (5-step onboarding)
- [x] Dashboard with stats and live chat
- [x] Backend REST API
- [x] AI integration with Groq
- [ ] WhatsApp Business API integration
- [ ] User authentication (JWT)
- [ ] Payment gateway (Razorpay)
- [ ] Email notifications
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Voice message handling

## 🤝 Contributing

Contributions welcome! Please open an issue or submit a PR.

**Contact**: botbazaar11@gmail.com

## 📄 License

MIT License - feel free to use this for your own projects!

## 🇮🇳 Made in India

Built with ❤️ for Indian small businesses.

---

**Questions?** Email us at botbazaar11@gmail.com or open an issue!
