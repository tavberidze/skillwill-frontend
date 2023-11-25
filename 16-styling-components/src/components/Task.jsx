import React from 'react';
import { TaskP, TaskWrapper } from './styled';

const Task = ({ task, tasks, setTasks }) => {
  const handleStart = () => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? { ...t, status: 'inprogress' } : t))
    );
  };

  const handleFinish = () => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === task.id ? { ...t, status: 'done' } : t))
    );
  };

  const handleBack = () => {
    if (task.status === 'inprogress') {
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? { ...t, status: 'backlog' } : t))
      );
    } else if (task.status === 'done') {
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === task.id ? { ...t, status: 'inprogress' } : t))
      );
    }
  };

  const handleDelete = () => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
  };

  return (
    <TaskWrapper>
      <TaskP>{task.text}</TaskP>
      {task.status === 'backlog' && (
        <>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
      {task.status === 'inprogress' && (
        <>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleFinish}>Finish</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
      {task.status === 'done' && (
        <>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </TaskWrapper>
  );
};

export default Task;