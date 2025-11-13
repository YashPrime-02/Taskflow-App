import React, { useState } from 'react';
import './TaskManager.css';

function TaskManager({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState('');
  const [assignee, setAssignee] = useState('');

  const users = ['Yash', 'Asha', 'Raj', 'Sita'];

  // Add a new task with assignee
  const addTask = () => {
    if (newTask.trim() === '' || assignee === '') return;

    setTasks((prev) => [
      ...prev,
      { id: Date.now(), task: newTask.trim(), assignedTo: assignee, completed: false },
    ]);

    setNewTask('');
    setAssignee('');
  };

  return (
    <div className="task-manager-container">
      <h1>Task Management & Assignment Tracker</h1>

      {/* Task creation */}
      <div className="add-task-section">
        <input
          type="text"
          placeholder="Enter task description"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="task-input"
        />

        <select
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          className="assignee-select"
        >
          <option value="">Assign to...</option>
          {users.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>

        <button onClick={addTask} className="add-task-button">
          Add Task
        </button>
      </div>

      {/* Task list */}
      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="no-task-text">No tasks created yet.</p>
        ) : (
          tasks.map(({ id, task, assignedTo }) => (
            <div key={id} className="task-item">
              <span>{task}</span>
              <strong>Assigned to: {assignedTo}</strong>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskManager;
