import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header';
import TodoList from '../todoList/TodoList';
import AddTodo from '../add-todo/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoList />
        <AddTodo />
      </div>
    );
  }
}

export default App;
