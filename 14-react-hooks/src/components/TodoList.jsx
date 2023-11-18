import React, { memo } from 'react';
import Task from './Task';

const TodoList = memo(({ todos, completedTodos, onComplete, onDelete, onBack }) => {
  return (
    <div>
      <div>
        <h2>To-Do</h2>
        <ul>
          {todos.map((todo) => (
            <Task
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onComplete={onComplete}
              onDelete={onDelete}
            />
          ))}
        </ul>
      </div>
      <div>
        <h2>Finished</h2>
        <ul>
          {completedTodos.map((todo) => (
            <Task
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onDelete={onDelete}
              onBack={onBack}
            />
          ))}
        </ul>
      </div>
    </div>
  );
});

export default TodoList;