import React, { Component } from 'react';

import styles from './styles';
import { STATUSES } from '../../constants';

import { withStyles } from '@material-ui/core';
import { Button, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

class TaskBoard extends Component {
  renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map(status => (
          <Grid item md={4} xs={12}>
            {status.label}
          </Grid>
        ))}
      </Grid>
    );
    return xhtml;
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button variant='contained' color='primary' className={classes.button}>
          <AddIcon /> Add new todo
        </Button>
        {this.renderBoard()}
      </div>
    );
  }
}

export default withStyles(styles)(TaskBoard);
