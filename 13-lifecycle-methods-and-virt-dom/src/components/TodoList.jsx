import React, { Component } from 'react';
import Task from './Task';


class TodoList extends Component {
  shouldComponentUpdate(nextProps) {
        return (
          nextProps.todos !== this.props.todos || nextProps.completedTodos !== this.props.completedTodos
        );
      }
      
  render() {
    const { todos, completedTodos, onAdd, onComplete, onDelete, onBack } = this.props;

    return (
      <div className="todo-list">
        <div>
          <input type="text" />
          <button onClick={onAdd}>Add</button>
          <h3>To-dos</h3>
          {todos.map((todo) => (
            <Task key={todo.id} id={todo.id} text={todo.text} onComplete={onComplete} onDelete={onDelete} onBack={onBack} />
          ))}
        </div>
        <div>
          <h3>Completed</h3>
          {completedTodos.map((completedTodo) => (
            <Task
              key={completedTodo.id}
              id={completedTodo.id}
              text={completedTodo.text}
              onComplete={onComplete}
              onDelete={onDelete}
              onBack={onBack}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;