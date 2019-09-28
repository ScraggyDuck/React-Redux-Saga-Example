import React, { Component } from 'react';

import TaskList from '../../components/TaskList';

import styles from './styles';
import { STATUSES } from '../../constants';

import { withStyles } from '@material-ui/core';
import { Button, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const listTask = [
  {
    id: 0,
    title: 'Play game',
    description: 'With my friends',
    status: 1
  },
  {
    id: 1,
    title: 'Play game1',
    description: 'With my friends1',
    status: 0
  },
  {
    id: 2,
    title: 'Play game2',
    description: 'With my friends2',
    status: 1
  },
  {
    id: 3,
    title: 'Play game3',
    description: 'With my friends3',
    status: 2
  }
];

class TaskBoard extends Component {
  renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTask.filter(
            task => task.status === status.value
          );
          return <TaskList key={index} tasks={taskFiltered} status={status} />;
        })}
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
