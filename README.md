# Admin Dashboard with Embedded Chatbot

A responsive admin dashboard UI with a interface in the center and a chatbot assistant on the right panel. This project is built with React and Express and containerized using Docker.

## 🧰 Tech Stack

- **Frontend:** React.js (with plain CSS for styling)
- **Backend:** Express.js (Node.js)
- **Containerization:** Docker
- **Chatbot:** Static logic-based bot with keyword matching
- **UI:** Fully responsive layout (sidebar, chat thread, chatbot panel)

---

## 📦 Project Structure

```
/client        --> React frontend
/server        --> Express backend
/docker        --> Docker configuration files
/public        --> Static files (index.html, etc.)
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/saurav-wankhade/admin-chatbot-dashboard.git
cd admin-chatbot-dashboard
```

---

### 2. Install Dependencies

#### For Frontend (React)

```bash
cd client
npm install
```

#### For Backend (Express)

```bash
cd ../server
npm install
```

---

### 3. Run Without Docker (Manual Method)

In separate terminals:

**Frontend:**

```bash
cd client
npm start
```

**Backend:**

```bash
cd server
node index.js
```

---

### 4. Run With Docker (Recommended)

```bash
docker-compose up --build
```

> Visit `http://localhost:3000` to view the dashboard.

---

## 🧠 Chatbot Features

- Responds to 10+ common user queries using keyword matching
- Responsive UI with reversed chat flow
- Typing animation above input field
- Scrollable chat body while keeping header and input fixed

---

## 📱 Mobile Responsiveness

- Sidebar collapses on smaller screens
- Chat and bot panels stack vertically
- Fully fluid layout using Flexbox

---

## ⚙️ Customization

You can extend the bot logic in:

```js
/client/src/components/Chatbot.jsx
```

Add more keywords or integrate with an actual NLP model later.

---
 
