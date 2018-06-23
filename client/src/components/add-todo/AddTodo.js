import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { addTodo } from '../../actions';
import { connect } from 'react-redux';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '40px',
    right: '40px'
  },
});

class AddTodo extends Component {
  addTodo() {
    var id = this.props.todos.length+1;
    this.props.dispatch(addTodo(id));
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button 
          variant="fab" 
          color="primary" 
          aria-label="add" 
          className={classes.button}
          onClick={() => this.addTodo()} >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(withStyles(styles)(AddTodo));