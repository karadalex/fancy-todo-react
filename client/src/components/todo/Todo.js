import React, { Component } from 'react';
import './Todo.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Todo extends Component {
  render() {
    return (
      <Paper className="Todo" elevation={4}>
        <Typography variant="headline" component="h3" className="TodoTitle">
          {this.props.title}
        </Typography>
        <Typography component="p">
          {this.props.task}
        </Typography>
      </Paper>
    );
  }
}

export default Todo;
