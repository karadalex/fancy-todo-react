import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header';
import TodoList from '../todoList/TodoList';
import AddTodo from '../add-todo/AddTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/todos')
      .then(res => res.json())
      .then(todos => this.setState(
        {todos}, //ES6 equivalent style for .setState({todos: todos})
        () => console.log('TODOs fetched: ', todos))
      );
  }

  addTodo() {
    this.setState(prevState => ({
      todos: [...prevState.todos, {
        id: prevState.todos.length+1, 
        title: "Todo",
        task:"New todo", 
        completed: false
      }]
    }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TodoList todos={this.state.todos}/>
        <AddTodo onClick={() => this.addTodo()}/>
      </div>
    );
  }
}

export default App;
