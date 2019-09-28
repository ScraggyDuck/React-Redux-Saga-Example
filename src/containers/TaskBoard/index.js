import React, { Component } from 'react';

import styles from './styles';
import { STATUSES } from '../../constants';

import { withStyles } from '@material-ui/core';
import {
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Box
} from '@material-ui/core';
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
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map(status => {
          const taskFiltered = listTask.filter(
            task => task.status === status.value
          );
          return (
            <Grid item md={4} xs={12}>
              <Box mt={2} mb={2}>
                <div className={classes.status}>{status.label}</div>
              </Box>
              <div className={classes.wrapperListTask}>
                {taskFiltered.map(task => {
                  const { id, title, description } = task;
                  return (
                    <Card key={id}>
                      <CardContent>
                        <Grid container justify='space-between'>
                          <Grid item md={8}>
                            <Typography component='h2'>{title}</Typography>
                          </Grid>
                          <Grid item md={4}>
                            {status.label}
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        <Button size='small'>Button</Button>
                      </CardActions>
                    </Card>
                  );
                })}
              </div>
            </Grid>
          );
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
