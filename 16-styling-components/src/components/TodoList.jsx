import React from 'react';
import Task from './Task';
import { TodoListWrapper, ProgressHeading, TaskUl } from './styled';

const TodoList = ({ title, tasks, setTasks }) => {
  const filteredTasks = tasks.filter((task) => task.status === title.toLowerCase().replace(' ', ''));

  return (
    <TodoListWrapper>
      <ProgressHeading>{title}</ProgressHeading>
      <TaskUl>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
      </TaskUl>
    </TodoListWrapper>
  );
};

export default TodoList;