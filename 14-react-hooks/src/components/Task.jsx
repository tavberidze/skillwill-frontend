import React, { memo } from 'react';

const Task = memo(({ id, text, completed, onComplete, onDelete, onBack }) => {
  const handleComplete = () => {
    onComplete(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleBack = () => {
    onBack(id);
  };

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <p>{text}</p>
      {!completed && (
        <button onClick={handleComplete}>Complete</button>
      )}
      <button onClick={handleDelete}>Delete</button>
      {completed && (
        <button onClick={handleBack}>Back</button>
      )}
    </div>
  );
});

export default Task;