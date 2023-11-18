import React, { useState, useEffect, useCallback } from 'react';
import TodoList from './TodoList';

const TodoApp = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [finishedTodos, setFinishedTodos] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() === '') return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: inputText, completed: false },
    ]);
    setInputText('');
  };


   const handleCompleteTodo = useCallback((id) => {
     setTodos((prevTodos) => {
        const todoToComplete = prevTodos.find((todo) => todo.id === id);
        setFinishedTodos((prevFinishedTodos) => {
            if (!prevFinishedTodos.some((todo) => todo.id === id)) {
            return [...prevFinishedTodos, { ...todoToComplete, completed: true }];
            }
            return prevFinishedTodos;
        });
        return prevTodos.filter((todo) => todo.id !== id);
        });
    }, []);

  const handleDeleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    setFinishedTodos((prevFinishedTodos) =>
      prevFinishedTodos.filter((todo) => todo.id !== id)
    );
  }, []);

  const handleBackToTodos = useCallback((id) => {
    setFinishedTodos((prevFinishedTodos) =>
      prevFinishedTodos.filter((todo) => todo.id !== id)
    );
    setTodos((prevTodos) => [
      ...prevTodos,
      { ...finishedTodos.find((todo) => todo.id === id), completed: false },
    ]);
  }, [finishedTodos]);

  return (
    <div>
      <div>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <TodoList
        todos={todos}
        completedTodos={finishedTodos}
        onComplete={handleCompleteTodo}
        onDelete={handleDeleteTodo}
        onBack={handleBackToTodos}
      />
    </div>
  );
};

export default TodoApp;