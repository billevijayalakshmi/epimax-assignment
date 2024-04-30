import React, { useState } from 'react';

const TaskListInterface = () => {
  // State for task inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for empty inputs
    if (!title.trim() || !description.trim() || !dueDate.trim()) {
      setError('Please fill out all fields.');
      return;
    }
    // Add task logic goes here
    // For demonstration purposes, we'll just log the task details
    console.log('New Task:', { title, description, dueDate });
    // Reset form and error state
    setTitle('');
    setDescription('');
    setDueDate('');
    setError('');
  };

  return (
    <div>
      <h2>Add New Task</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Due Date:</label>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskListInterface;
