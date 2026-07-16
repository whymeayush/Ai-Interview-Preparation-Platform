# Interview AI

An AI-powered interview preparation platform that helps users analyze their resumes, generate personalized interview reports, and prepare for technical and behavioral interviews using Google Gemini AI.

---

## Features

- 🔐 User Authentication (JWT)
- 🤖 AI-powered Interview Report Generation
- 📄 Resume Analysis
- 💼 Job Description Matching
- 📅 Personalized Interview Preparation Plan
- 📊 Match Score Analysis
- 💻 Responsive User Interface

---

## Tech Stack

### Frontend
- React
- Vite
- SCSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Google Gemini AI
- JWT Authentication
- Puppeteer
- Zod

---

## Project Structure

```
Interview-AI-YT-MAIN/
│
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── Backend/
│   ├── src/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/interview-ai.git
cd interview-ai
```

---

## Backend Setup

```bash
cd Backend
npm install
```

### Create `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

GOOGLE_GENAI_API_KEY=your_google_gemini_api_key

JWT_SECRET=your_secret_key
```

### Start Backend

```bash
npm start
```

Backend runs on:

```
http://localhost:3000
```

---

## Frontend Setup

Open another terminal.

```bash
cd Frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Available Scripts

### Backend

```bash
npm start
```

### Frontend

```bash
npm run dev
npm run build
npm run preview
```

---



---

## Future Improvements

- Email Notifications
- Mock Interview Module
- AI Voice Interview
- Admin Dashboard
- Interview History
- Resume PDF Export

---

## Author

**Ayush Tiwari**

GitHub: https://github.com/whymeayush