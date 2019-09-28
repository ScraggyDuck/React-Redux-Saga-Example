import React, { Component } from 'react';

import styles from './styles';

import { withStyles } from '@material-ui/core';
import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Fab,
  Icon
} from '@material-ui/core';

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    const { title, description } = task;
    return (
      <Box mb={2}>
        <Card>
          <CardContent>
            <Grid container justify='space-between'>
              <Grid item md={8}>
                <Typography component='h2'>{title}</Typography>
              </Grid>
              <Grid item md={4}>
                {status.label}
              </Grid>
              <p>{description}</p>
            </Grid>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Fab
              color='primary'
              aria-label='edit'
              className={classes.fab}
              size='small'
            >
              <Icon size='small'>edit</Icon>
            </Fab>
            <Fab
              color='secondary'
              aria-label='delete'
              className={classes.fab}
              size='small'
            >
              <Icon size='small'>delete</Icon>
            </Fab>
          </CardActions>
        </Card>
      </Box>
    );
  }
}

export default withStyles(styles)(TaskItem);
