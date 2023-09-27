import Button from './Button';
import React from 'react';

const TodoList = ({ tasks, markAsDone, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={task.done ? { textDecoration: 'line-through' } : {}}>
          {task.text}
          <button onClick={() => markAsDone(index)}> done</button>
          <button onClick={() => deleteTask(index)}>Del</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;