# 💬 Real-Time Chat Application

A **full-stack real-time chat application** where multiple users can communicate instantly using WebSockets.

Built with **React, Node.js, Express, and Socket.IO**, and deployed using **Vercel (frontend)** and **Render (backend)**.

---

# 🚀 Live Demo

Frontend (Vercel)

https://real-time-chat-xi-steel.vercel.app

Backend API (Render)

https://realtime-chat-n74w.onrender.com

---

# ⚡ Features

• Real-time messaging using **Socket.IO**
• Multiple users can chat simultaneously
• **Typing indicator** when a user is typing
• Instant message broadcasting
• System notifications when users join or leave
• Clean and responsive UI
• Live connection status indicator

---

# 🛠 Tech Stack

### Frontend

* React
* Socket.IO Client
* CSS

### Backend

* Node.js
* Express
* Socket.IO

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

# 📸 Screenshots

### Chat Interface

![Chat Start](./screenshots/chat-start.png)

---

### User Sending Message

![User1 Message](./screenshots/chat-user1.png)

---

### Another User Sending Message

![User2 Message](./screenshots/chat-user2.png)

---

### Real-Time Conversation

![Chat Conversation](./screenshots/chat-conversation.png)

---

# 📁 Project Structure

```
RealTime-Chat
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── public
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── screenshots
│   ├── chat-start.png
│   ├── chat-user1.png
│   ├── chat-user2.png
│   └── chat-conversation.png
│
└── README.md
```

---

# ⚙️ Local Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/kamallch2204/RealTime-Chat.git
cd RealTime-Chat
```

---

### 2️⃣ Install dependencies

Backend

```
cd backend
npm install
```

Frontend

```
cd frontend
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env` file inside the **frontend** folder.

```
REACT_APP_SOCKET_URL=http://localhost:5000
```

---

### 4️⃣ Run the application

Start backend

```
cd backend
node server.js
```

Start frontend

```
cd frontend
npm start
```

Open in browser:

```
http://localhost:3000
```

---

# 🌐 Deployment Architecture

```
User Browser
     ↓
Vercel (React Frontend)
     ↓
Socket.IO Connection
     ↓
Render (Node.js Backend)
```

---

# 👨‍💻 Author

**Kamal**

GitHub
https://github.com/kamallch2204
