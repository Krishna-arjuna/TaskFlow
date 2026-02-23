# 📝 TaskFlow – Daily Task & Routine Manager

TaskFlow is a modern task management web application built with **React**.  
It helps users organize **daily tasks** and **routine tasks** efficiently with a clean dashboard-style UI.

---

## 🚀 Features

### ✅ Task Management
- Add tasks with **date & time**
- Mark tasks as **completed**
- Delete tasks
- View tasks based on:
  - **Today**
  - **Upcoming**

### 🔁 Daily Routine Tasks
- Add routines that repeat every day
- Mark routines as completed
- Delete routines
- Separate routine section for clarity

### 🔍 Smart Filtering
- Search tasks by name
- Filter tasks based on selected view (Today / Upcoming)

### 💾 Data Persistence
- Tasks and routines are saved using **localStorage**
- Data remains after page refresh

### 📋 Task Details Panel
- Click a task to view its details in a side panel

---

## 🛠️ Tech Stack

- **React** (Functional Components & Hooks)
- **JavaScript (ES6+)**
- **Tailwind CSS** (UI styling)
- **localStorage** (Data persistence)

---

## 📂 Project Structure
src/
│── components/
│ ├── Sidebar.jsx
│ ├── TaskBoard.jsx
│ ├── TaskDetails.jsx
│ ├── TodoInput.jsx
│ ├── RoutineInput.jsx
│
│── pages/
│ └── Dashboard.jsx
│
│── App.jsx
│── main.jsx
│── index.css
