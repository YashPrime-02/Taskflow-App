# 🚀 TaskFlow – Team Task Manager & Performance Tracker

TaskFlow is a modern React-based team management application designed to track tasks, assign work to employees, and visualize performance using charts.  
It includes **Admin** and **Employee** dashboards, a clean UI, fast interactions, and persistent data (powered by localStorage).

---

## 📂 Project Structure

src/
assets/ # Images, icons, and static assets

pages/
AdminDashboard/
AdminDashboard.jsx # Admin home page (manage employees + tasks)
AdminDashboard.css
EmployeeDashboard/
EmployeeDashboard.jsx # Employee tasks view & progress tracker
EmployeeDashboard.css
Login/
Login.jsx # Login page (Admin / Employee)
Login.css
PerformanceChart/
PerformanceChart.jsx # Employee performance visualized in charts
PerformanceChart.css
TaskManager/
TaskManager.jsx # Add / Edit / Assign tasks
TaskManager.css
TaskItem/
TaskItem.jsx #Single task component
TaskItem.css
Filter/
Filter.jsx #Task filtering by status, priority, assignee
Filter.css
Toast/
Toast.jsx #Success/error notification toast
Toast.css

context/
AuthContext.jsx # Handles login state, roles, and user session

utils/
localStorage.js # Helpers for GET/SET/UPDATE persistent storage

App.jsx # Main routes + layout
App.css
main.jsx
index.css


---

## ✨ Features

### 🧑‍💼 Admin Features
- Add employees  
- Assign tasks to team members  
- View all tasks  
- Filter tasks by status or employee  
- Track overall team performance  
- Edit/Delete tasks  
- View charts of employee performance  

### 👨‍🔧 Employee Features
- View tasks assigned to them  
- Update task status (Pending / In Progress / Completed)  
- Check personal performance chart  
- Simple and clean UI for task updates  

### 📊 Performance Tracking
- Interactive charts  
- Employee productivity breakdown  
- Task completion history  

### 💾 Data Persistence
- Uses **localStorage** to save:
  - Employees
  - Tasks
  - Login session
  - Performance stats

### 👁️ Elegant UI + Animations
- React + CSS animations  
- Smooth UI transitions  
- Toast notifications  
- Clean professional dashboard layout  

### 🔐 Authentication
- Admin and Employee login  
- Role-based routing  
- Protected dashboard pages  

---

## 🛠️ Tech Stack

- **React 18+**
- **React Router**
- **Context API** (authentication)
- **LocalStorage** (data persistence)
- **Recharts** or **Chart.js** (performance charts)
- **CSS Animations** (no Tailwind)
- **Vite** (lightning-fast dev environment)

---

## 🚀 Getting Started

### 1️⃣ Clone the project
```bash
git clone https://github.com/YOUR-USERNAME/TaskFlow.git
cd TaskFlow
