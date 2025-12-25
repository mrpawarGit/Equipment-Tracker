# 🛠️ Equipment Tracker

A simple full-stack web application to manage and track equipment details such as type, status, and last cleaned date.
Built as part of an intern take-home assignment to demonstrate frontend, backend, and database fundamentals.

---

## ✨ Features

* View all equipment in a list
* Add new equipment
* Edit existing equipment
* Delete equipment
* Responsive UI (table view on desktop, card view on mobile)
* Minimal loading screen while waiting for backend (useful for cold starts)

---

## 🧑‍💻 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS (Vite plugin)
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

---

## 📁 Project Structure

```text
Equipment-Tracker/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   ├── .env
│   │── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── services/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## ⚙️ API Endpoints

| Method | Endpoint             | Description          |
| ------ | -------------------- | -------------------- |
| GET    | `/api/equipment`     | Get all equipment    |
| POST   | `/api/equipment`     | Add new equipment    |
| PUT    | `/api/equipment/:id` | Update equipment     |
| DELETE | `/api/equipment/:id` | Delete equipment     |
| GET    | `/health`            | Backend health check |

---

## 🚀 How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/mrpawarGit/Equipment-Tracker.git
cd Equipment-Tracker
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/equipment_tracker
```

Start the backend:

```bash
npm run dev
```

Backend will run at:
`http://localhost:3000`

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` folder:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

Start the frontend:

```bash
npm run dev
```

Frontend will run at:
`http://localhost:5173`

---

## ⏳ Backend Cold-Start Handling

On initial load, the frontend displays a **minimal loading screen** while waiting for the backend `/health` endpoint to respond.

This is useful when the backend is deployed on platforms like **Render**, where servers may take time to wake up from a cold start.

---

## 📱 Responsive Design

* **Desktop:** Equipment displayed in a table
* **Mobile:** Equipment displayed as cards for better readability

This ensures a clean and usable experience across devices.

---

## 🔮 Improvements With More Time

* Pagination for large datasets
* Better error handling and user feedback

---

## 📌 Conclusion

This project focuses on:

* Clean code organization
* Practical REST API design
* Responsive UI
* Real world deployment considerations

The goal was to build a **working, maintainable solution** within the given requirements.

---
