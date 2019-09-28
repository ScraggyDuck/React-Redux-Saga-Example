import React, { Component } from 'react';

import styles from './styles';

import { withStyles } from '@material-ui/core';
import {
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Button,
  DialogTitle
} from '@material-ui/core';

class TaskForm extends Component {
  render() {
    const { classes, open, onClose } = this.props;
    return (
      <Dialog open={open} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Add new todo</DialogTitle>
        <DialogContent>
          <TextField
            id='standard-multiline-flexible'
            label='Name'
            multiline
            rowsMax='4'
            className={classes.textField}
            margin='normal'
          />
          <TextField
            id='standard-multiline-flexible'
            label='Description  '
            multiline
            rowsMax='4'
            className={classes.textField}
            margin='normal'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color='primary'>
            OK
          </Button>
          <Button onClick={onClose} color='primary'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);
