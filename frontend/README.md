# 🖥️ Equipment Tracker – Frontend

This is the frontend for the **Equipment Tracker** application.
It is a responsive single-page application built with **React (Vite)** and **Tailwind CSS**, consuming a REST API provided by the backend service.

---

## 🚀 Live Application

**Frontend URL:**
👉 **Equipment Tracker**

---

## 🧑‍💻 Tech Stack

* **React** (Vite)
* **Tailwind CSS** (Vite plugin)
* **Axios**
* **JavaScript (ES6+)**

---

## 📁 Folder Structure

```text
frontend/
├── public/
│   └── equLogo.svg
└── src/
|   │
|   ├── components/
|   │   ├── EquipmentForm.jsx
|   │   ├── EquipmentTable.jsx
|   │   └── LoadingScreen.jsx
|   │
|   ├── pages/
|   │   └── EquipmentPage.jsx
|   │
|   └── services/
|   |   └── equipmentApi.js
|   │
|   │   App.jsx
|   │   App.css
|   │   index.css
|   │   main.jsx
│   .env
│   .gitignore
│   eslint.config.js
│   index.html
│   package.json
│   package-lock.json
│   vite.config.js
│   README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the **frontend root**:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

> ⚠️ Environment variables in Vite must start with `VITE_`.
> The `.env` file is ignored via `.gitignore`.

---

## ▶️ How to Run Locally

### 1️⃣ Install Dependencies

```bash
npm install
```

---

### 2️⃣ Start Development Server

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🔗 API Integration

The frontend communicates with the backend using **Axios**.

All API calls are centralized in:

```text
src/services/equipmentApi.js
```

The API base URL is configured using the environment variable:

```js
import.meta.env.VITE_API_BASE_URL
```

---

## ⏳ Backend Cold-Start Handling

On first load, the application displays a **minimal loading screen** while waiting for the backend server to become available.

This is especially useful when the backend is deployed on platforms like **Render**, where the server may take time to start due to cold-start behavior.

---

## 📱 Responsive Design

* **Desktop:** Equipment displayed in a table format
* **Mobile:** Equipment displayed as card components

This ensures good usability across all screen sizes.

---

## 🎯 Key Features

* View all equipment
* Add new equipment
* Edit existing equipment
* Delete equipment
* Search and filter functionality
* Sorting by last cleaned date
* Form validation
* Minimalist design
* Responsive UI

---

## 📌 Notes

* UI intentionally kept minimal
* No authentication (out of scope for assignment)
* Focus on clarity, usability, and maintainability

---
