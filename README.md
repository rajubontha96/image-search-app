# 📸 Image Search App (React + Node.js + Unsplash API)

## 🚀 Live Project Overview

A responsive image search web application built using **ReactJS** and **Node.js**, powered by the **Unsplash API**. Users can search for images, explore categories, and browse results with advanced pagination.

---

## 🎯 Features

* 🔍 Search images in real-time
* 🧭 Category-based filtering (Mountains, Beaches, etc.)
* 🖼 Responsive image grid layout
* ✨ Hover overlay with image details
* 🔄 Advanced pagination (Google-style dynamic pages)
* ⚡ Debounced search (optimized performance)
* 🪟 Image modal preview on click
* ⏳ Loading indicator
* 🔐 Secure API usage via backend (Node.js)

---

## 🛠 Tech Stack

### Frontend:

* ReactJS
* CSS3

### Backend:

* Node.js
* Express.js
* Unsplash JavaScript SDK

---

## 📁 Project Structure

```
image-search-app/
├── backend/
├── frontend/
```

---

## 🔑 API Used

* Unsplash API
  https://unsplash.com/documentation#search-photos

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone <your-repo-link>
cd image-search-app
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
UNSPLASH_ACCESS_KEY=your_access_key
PORT=5000
```

Run backend:

```
npm start
```

---

### 3️⃣ Frontend Setup

Open new terminal:

```
cd frontend
npm install
npm start
```

---

## 🌐 Usage

* Open browser: `http://localhost:3000`
* Search for images
* Click categories
* Navigate using pagination
* Click image to preview

---

## 💡 Bonus Features Implemented

* Advanced Pagination
* Debounced Search
* Image Modal
* Backend API Integration (Node.js)

---

## 🚧 Challenges Faced

* Handling API rate limits
* Managing pagination dynamically
* Implementing debounce for better UX
* Structuring frontend & backend cleanly
* Handling loading and empty states

---

## 📈 Future Improvements

* Infinite scrolling
* Skeleton loading animation
* Dark mode
* Deployment (Vercel + Render)
* Favorites / Save images

---

## 👨‍💻 Author

Raju Bontha

---

## 📜 License

This project is for educational purposes only.
