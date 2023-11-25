import React, { useState } from 'react';
import TodoList from './TodoList';
import { TodoWrapper, ColumnsWrapper} from './styled'

const TodoApp = () => {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddTask = () => {
    if (inputText.trim() === '') return;

    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), text: inputText, status: 'backlog' },
    ]);
    setInputText('');
  };

  return (
    <TodoWrapper>
      <div>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ColumnsWrapper>
        <TodoList title="Backlog" tasks={tasks} setTasks={setTasks} />
        <TodoList title="In progress" tasks={tasks} setTasks={setTasks} />
        <TodoList title="Done" tasks={tasks} setTasks={setTasks} />
      </ColumnsWrapper>
    </TodoWrapper>
  );
};

export default TodoApp;