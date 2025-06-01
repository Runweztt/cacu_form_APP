import React, { useState } from 'react';
import './Todo.css'

function Todo() {
  const [tasks, setTasks] = useState(['Go to school', 'Finish assignment', 'Play football'])
  const [newTask, setNewTask] = useState("")

  const inputChange = (e) => {
    setNewTask(e.target.value)
  }

  const addTasks = () => {
    if (newTask.trim() !== "") {
      setTasks(prev => [...prev, newTask])
      setNewTask('');
    }
  }

  const deleteTask = (index) => {
    const updateTask = tasks.filter((_, i) => i !== index)
    setTasks(updateTask)
  }

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTasks();
    }
  }

  return (
    <div className="todo-container">
      <div className="todo-list">
        <h1>Todo List</h1>
        <div className="input-section">
          <input 
            type="text" 
            placeholder="Enter a new task..." 
            value={newTask}
            onChange={inputChange}
            onKeyPress={handleKeyPress}
          />
          <button className="add-btn" onClick={addTasks}>
            Add Task
          </button>
        </div>
      </div>

      <div className="tasks-container">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📝</div>
            <div className="empty-state-text">No tasks yet!</div>
            <div className="empty-state-subtext">Add your first task above to get started.</div>
          </div>
        ) : (
          <ul className="tasks-list">
            {tasks.map((task, index) => (
              <li key={index} className="task-item">
                <div className="task-content">
                  <span className="task-text">{task}</span>
                  <div className="task-buttons">
                    <button 
                      className="task-btn delete-btn" 
                      onClick={() => deleteTask(index)}
                      title="Delete task"
                    >
                      Delete
                    </button>
                    <button 
                      className="task-btn move-btn" 
                      onClick={() => moveTaskUp(index)}
                      disabled={index === 0}
                      title="Move up"
                    >
                      ↑
                    </button>
                    <button 
                      className="task-btn move-btn" 
                      onClick={() => moveTaskDown(index)}
                      disabled={index === tasks.length - 1}
                      title="Move down"
                    >
                      ↓
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Todo