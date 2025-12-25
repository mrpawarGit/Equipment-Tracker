# 🛠️ Equipment Tracker – Backend

This is the backend service for the **Equipment Tracker** application.
It provides RESTful APIs to manage equipment data and is built using **Node.js, Express, and MongoDB**.

---

## 🚀 Backend Deployment

**Deployed Backend URL:**
👉 **[Equipment Tracker API](https://equipment-tracker-tf4h.onrender.com/)**
---

## 🧑‍💻 Tech Stack

* **Node.js** / **Express.js**
* **MongoDB** (**Mongoose**)
* **dotenv**

---

## 📁 Folder Structure

```text
backend/
│
├── config/
│   └── db.js
├── controllers/
│   └── equipmentController.js
├── models/
│   └── EquipmentModel.js
└── routes/
|   └── equipmentRoutes.js
│── .env
│── server.js
│── .gitignore
│── package.json
```

---

## ⚙️ Environment Variables

Create a `.env` file in the **backend root**:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/equipment_tracker
```

⚠️ The `.env` file is **not committed** and is listed in `.gitignore`.

---

## 📌 API Endpoints

### Equipment APIs

| Method | Endpoint             | Description               |
| ------ | -------------------- | ------------------------- |
| GET    | `/api/equipment`     | Fetch all equipment       |
| POST   | `/api/equipment`     | Add new equipment         |
| PUT    | `/api/equipment/:id` | Update existing equipment |
| DELETE | `/api/equipment/:id` | Delete equipment          |

### Health Check

| Method | Endpoint  | Description             |
| ------ | --------- | ----------------------- |
| GET    | `/health` | Backend readiness check |

The `/health` endpoint is used by the frontend to handle **cold starts** when deployed on platforms like Render.

---

## ▶️ How to Run Locally

### 1️⃣ Install Dependencies

```bash
npm install
```

---

### 2️⃣ Start the Server

```bash
npm run dev
```

Server will start at:

```
http://localhost:3000
```

---

## 🧠 Data Model (Equipment)

Each equipment record includes:

* **name** – String (required)
* **type** – Enum (`Machine`, `Vessel`, `Tank`, `Mixer`)
* **status** – Enum (`Active`, `Inactive`, `Under Maintenance`)
* **lastCleanedDate** – Date (required)
* **timestamps** – Created & updated time

---

## ✅ Key Design Decisions

* Clean MVC-based structure (routes, controllers, models)
* Mongoose schema validation using enums
* RESTful API design
* Lightweight health endpoint for deployment readiness
* No authentication (as per assignment scope)

---

## 🔮 Improvements With More Time

* Pagination and filtering
* Request validation middleware
* Centralized error handling
* API documentation (Swagger)
* Authentication and role-based access

---

## 📌 Notes

* This backend is designed to be **simple, readable, and maintainable**
* Focused on correctness and clarity rather than overengineering
* Built to support a React frontend cleanly

---

