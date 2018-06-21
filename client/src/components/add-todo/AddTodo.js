import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '40px',
    right: '40px'
  },
});

function AddTodo(props) {
  const { classes } = props;
  return (
    <div>
      <Button 
        variant="fab" 
        color="primary" 
        aria-label="add" 
        className={classes.button} >
        <AddIcon />
      </Button>
    </div>
  );
}

AddTodo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddTodo);