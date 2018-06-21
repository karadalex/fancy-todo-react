import React, { Component } from 'react';
import './TodoList.css';
import Todo from '../todo/Todo';
import Grid from '@material-ui/core/Grid';

class TodoList extends Component {
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
            )
    }

    render() {
        return (
            <div className="TodoList">
              <Grid container justify="space-between" spacing={24}>
                {this.state.todos.map(todo => {
                  return (
                    <Grid item xs={12} sm={6} md={4}>
                      <Todo 
                          key={todo.id} 
                          title={todo.title} 
                          task={todo.task}>
                      </Todo>
                    </Grid>
                  )
                })}
              </Grid>
            </div>
        );
    }
}

export default TodoList;
