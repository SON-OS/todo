import Button  from './Button';
import React, { useState } from 'react';

const Task = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="container ">

    <form  onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Your Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <div className=' p-2'>
      <Button text="Add"/>
      </div>
    </form>
    </div>
  );
};

export default Task;