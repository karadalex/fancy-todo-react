import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header';
import TodoList from '../todoList/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoList />
      </div>
    );
  }
}

export default App;
