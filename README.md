# Taskflow App

src/
  assets/
  pages/
    Login/
      Login.jsx           // Handles both Login and Signup UI toggling
      Login.css
    AdminDashboard/
      AdminDashboard.jsx  // Admin-specific features
      AdminDashboard.css
    EmployeeDashboard/
      EmployeeDashboard.jsx // Employee-specific features
      EmployeeDashboard.css
    TaskManager/
      TaskManager.jsx
      TaskManager.css
    TaskItem/
      TaskItem.jsx
      TaskItem.css
    PerformanceChart/
      PerformanceChart.jsx
      PerformanceChart.css
    Filter/
      Filter.jsx
      Filter.css
    Toast/
      Toast.jsx
      Toast.css
  context/
    AuthContext.jsx        // Handles current user, role, login/sign up states
  utils/
    localStorage.js        // For localStorage helpers (auth/tasks, optional)
  App.jsx
  App.css
  main.jsx
  index.css
