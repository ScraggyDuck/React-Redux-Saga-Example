import React, { Component } from 'react';

import TaskItem from '../TaskItem';

import styles from './styles';

import { Grid, Box, withStyles } from '@material-ui/core';

class TaskList extends Component {
  render() {
    const { classes, tasks, status } = this.props;
    return (
      <Grid item md={4} xs={12}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} status={status} />
          ))}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
