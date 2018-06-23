import React, { Component } from 'react';
import './Todo.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import { changeTodoTitle } from '../../actions';
import { connect } from 'react-redux';

const styles = theme => ({
  title: {
    fontSize: '2em',
    paddingBottom: '20px'
  }
});

class Todo extends Component {
  onChangeTitle = event => {
    this.props.dispatch(changeTodoTitle(this.props.id, event.target.value));
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className="Todo" elevation={4}>
        <Input
          multiline
          disableUnderline={true}
          fullWidth={true}
          className={classes.title}
          value={this.props.title}
          onChange={this.onChangeTitle}
        />
        <Input
          rowsMax="5"
          multiline
          disableUnderline={true}
          defaultValue={this.props.task}
        />
      </Paper>
    );
  }
}

Todo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(Todo));
