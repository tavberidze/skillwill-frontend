import React, { Component } from 'react';
import TodoList from './components/TodoList'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      completedTodos: [],
    };
  }

  handleAdd = () => {
    const input = document.querySelector('.todo-list input');
    const text = input.value.trim();

    if (text === '') return;

    const newTodo = {
      id: Date.now(),
      text: text,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));

    input.value = '';
  };

  handleComplete = (id) => {
    const { todos, completedTodos } = this.state;
    const todoToComplete = todos.find((todo) => todo.id === id);

    if (todoToComplete) {
      this.setState((prevState) => ({
        todos: prevState.todos.filter((todo) => todo.id !== id),
        completedTodos: [...completedTodos, todoToComplete],
      }));
    }
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
      completedTodos: prevState.completedTodos.filter((todo) => todo.id !== id),
    }));
  };

  handleBack = (id) => {
    const { completedTodos, todos } = this.state;
    const completedTodoToBack = completedTodos.find((todo) => todo.id === id);

    if (completedTodoToBack) {
      this.setState((prevState) => ({
        completedTodos: prevState.completedTodos.filter((todo) => todo.id !== id),
        todos: [...todos, completedTodoToBack],
      }));
    }
  };

  render() {
    const { todos, completedTodos } = this.state;

    return (
      <div className="app">
        <TodoList
          todos={todos}
          completedTodos={completedTodos}
          onAdd={this.handleAdd}
          onComplete={this.handleComplete}
          onDelete={this.handleDelete}
          onBack={this.handleBack}
        />
      </div>
    );
  }
}

export default App;


