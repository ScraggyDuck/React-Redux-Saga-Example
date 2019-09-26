import React, { Component } from 'react';

import styles from './styles';

import { withStyles } from '@material-ui/core';

class TaskBoard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.box}>
        <div className={classes.shape}>ReactJs</div>
        <div className={classes.shape}>AngularJS</div>
        <div className={classes.shape}>VueJS</div>
      </div>
    );
  }
}

export default withStyles(styles)(TaskBoard);
