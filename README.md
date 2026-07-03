# 🎓 Edvya – AI-Powered Learning Management System

Edvya is a modern, full-stack AI-powered Learning Management System (LMS) built using the MERN stack. It provides an interactive platform for educators to create and manage courses while enabling students to purchase, enroll, and learn through an intelligent and personalized learning experience.

Designed with scalability and user experience in mind, Edvya combines traditional LMS functionality with AI-driven features such as an intelligent learning assistant, automated content generation, and personalized recommendations.

---

## ✨ Features

### 👨‍🎓 Student Features
- Secure authentication with Clerk
- Browse and search courses
- Course purchasing using Stripe
- Enroll in courses
- Watch video lectures
- Track learning progress
- Mark lectures as completed
- Rate and review courses
- Responsive dashboard
- Personalized learning experience

### 👨‍🏫 Educator Features
- Educator dashboard
- Create and publish courses
- Upload chapters and lectures
- Rich text course descriptions
- View enrolled students
- Track earnings
- Manage published courses

### 🤖 AI Features (Planned / In Progress)
- AI Learning Assistant for course-specific questions
- AI-generated lecture summaries
- AI-generated quizzes and assessments
- Personalized course recommendations
- Smart learning roadmap generation
- AI-powered educator assistant for course creation

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Axios
- Clerk Authentication

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Payment
- Stripe

### Authentication
- Clerk

### AI (Upcoming)
- OpenAI API
- Vector Embeddings
- MongoDB Atlas Vector Search

---

## 📂 Project Structure

```
Edvya/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── context/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── configs/
│   └── server.js
│
└── README.md
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/Edvya.git
```

### Navigate into the project

```bash
cd Edvya
```

### Install frontend dependencies

```bash
cd client
npm install
```

### Install backend dependencies

```bash
cd ../server
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **server** directory.

```env
MONGODB_URI=your_mongodb_connection
CLERK_SECRET_KEY=your_clerk_secret
STRIPE_SECRET_KEY=your_stripe_secret
CURRENCY=USD
```

For the **client**, create:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:5000
```

---

## ▶️ Running the Project

### Backend

```bash
cd server
npm run server
```

### Frontend

```bash
cd client
npm run dev
```

---

## 📸 Screenshots

> Add screenshots here after completing the UI.

- Home Page
- Course Details
- Course Player
- Educator Dashboard
- Student Dashboard
- AI Assistant

---

## 🎯 Future Enhancements

- AI Tutor integrated into every course
- Voice-based learning assistant
- AI-generated flashcards
- AI interview preparation mode
- Automatic subtitle generation
- Semantic video search
- AI assignment evaluation
- Real-time collaborative classrooms
- Certificates with blockchain verification

---

## 📈 Learning Outcomes

Through this project, I gained experience with:

- Full Stack MERN Development
- REST API Design
- Authentication & Authorization
- Payment Gateway Integration
- Database Design
- State Management
- Responsive UI Development
- AI Integration
- Deployment Best Practices

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Naga Vinod Naidu Ravanam**
---

⭐ If you found this project helpful, consider giving it a star!
