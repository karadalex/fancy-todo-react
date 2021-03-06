import React, { Component } from 'react';
import './TodoList.css';
import Todo from '../todo/Todo';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { loadFetchedTodos } from '../../actions';
import axios from 'axios';

class TodoList extends Component {
  componentDidMount() {
    axios.get('/api/v1/todos')
      .then(res => {
        this.props.dispatch(loadFetchedTodos(res.data)); 
        // ^ Use only arrow functions, to be able to use this keyword
      })
      .catch(error => {
        console.log(error);
      });

  }

  render() {
    return (
      <div className="TodoList">
        <Grid container spacing={24}>
          {this.props.todos.map(todo => {
            return (
              <Grid key={todo.id} item xs={12} sm={6} md={4} lg={2}>
                <Todo 
                  id={todo.id} 
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

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(TodoList);
