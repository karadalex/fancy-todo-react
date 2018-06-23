import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header';
import TodoList from '../todoList/TodoList';
import AddTodo from '../add-todo/AddTodo';
import { connect } from 'react-redux';

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

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(App);
