import React, { Component } from 'react';

import PropTypes from 'prop-types';

import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

import styles from './styles';
import { STATUSES } from '../../constants';

import { withStyles, Button, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tasksActions from '../../actions/tasks';

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
  state = {
    open: false
  };

  componentDidMount() {
    const { tasksActionCreators } = this.props;
    const { fetchListTasks } = tasksActionCreators;
    fetchListTasks();
  }

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

  renderTaskForm = () => {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleCloseForm} />;
    return xhtml;
  };

  handleClickOpenForm = () => {
    this.setState({
      open: true
    });
  };

  handleCloseForm = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleClickOpenForm}
        >
          <AddIcon /> Add new todo
        </Button>
        {this.renderBoard()}
        {this.renderTaskForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  tasksActionCreators: PropTypes.shape({
    fetchListTasks: PropTypes.func
  })
};

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    tasksActionCreators: bindActionCreators(tasksActions, dispatch)
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TaskBoard)
);
