import React, { useState } from 'react';
import Task from './component/Task';
import TodoList from './component/TodoList';
import './App.css'


const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      text: text,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const markAsDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className='container '>
    
 
      <h1 className='title'>To Do List</h1>
      <Task addTask={addTask} />
      <TodoList tasks={tasks} markAsDone={markAsDone} deleteTask={deleteTask} />
    </div>
  );
};

export default App;