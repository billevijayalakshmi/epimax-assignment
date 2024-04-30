import React from 'react';
import TaskListInterface from './TaskListInterface';

const App = () => {
  return (
    <div>
      <h1>Task Management Application</h1>
      <TaskListInterface />
      {/* Other components like Task Assignment, Task Status Updates, Task Summary Page can be added here */}
    </div>
  );
};

export default App;
