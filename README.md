# 🚀 Full-Stack Portfolio Website

A modern **full-stack portfolio website** showcasing frontend design, backend development, and database integration. Built to demonstrate real-world web development workflow and deployment.

---

## 🌐 Live Demo

* 🔗 **Frontend:** https://sparkling-clafoutis-0b1c71.netlify.app/
* 🔗 **Backend API:** https://portfolio-website-73.onrender.com/

---

## ✨ Features

* 🎨 Modern glassmorphism UI with smooth animations
* 🧑 Profile section with clean layout
* 📜 Expandable certifications (accordion style)
* 📱 Fully responsive (mobile + desktop)
* 📩 Contact form with backend API integration
* 🗄️ Messages stored securely in MongoDB Atlas
* ⚡ Deployed and accessible globally

---

## 🛠️ Tech Stack

### 🎯 Frontend

* HTML5
* CSS3
* JavaScript (Vanilla)

### ⚙️ Backend

* Node.js
* Express.js

### 🗄️ Database

* MongoDB Atlas

### ☁️ Deployment

* Git & GitHub
* Render (Backend)
* Netlify / GitHub Pages (Frontend)

---

## 📁 Project Structure

```
portfolio/
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env (not pushed to GitHub)
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend folder**:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

⚠️ Never upload `.env` to GitHub.

---

## 🧪 Run Locally

### 1. Clone Repository

```
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME/backend
```

### 2. Install Dependencies

```
npm install
```

### 3. Start Server

```
node server.js
```

Server runs at:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

### POST `/contact`

Stores contact form data in MongoDB

**Request Body:**

```
{
  "name": "Your Name",
  "email": "your@email.com",
  "message": "Your message"
}
```

---

## 🎯 Project Purpose

This project demonstrates:

* Full-stack web development workflow
* REST API creation with Express.js
* MongoDB database integration
* UI/UX design with animations
* Deployment of frontend & backend

---

## 🚀 Future Improvements

* 📄 Certificate preview modal
* 🛠️ Admin dashboard for messages
* 🔐 Authentication system
* 🌟 Advanced animations & transitions

---

## 👨‍💻 Author

**Ziza Lohe**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and support the journey!
