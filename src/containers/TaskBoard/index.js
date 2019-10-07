import { Button, Grid, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tasksActions from '../../actions/tasks';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { STATUSES } from '../../constants';
import styles from './styles';

class TaskBoard extends Component {
  state = {
    open: false
  };

  componentDidMount() {
    const { tasksActionCreators } = this.props;
    const { fetchListTasksRequest } = tasksActionCreators;
    fetchListTasksRequest();
  }

  renderBoard = () => {
    const { listTasks } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTasks.filter(
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
    fetchListTasksRequest: PropTypes.func
  }),
  listTasks: PropTypes.array
};

const mapStateToProps = state => {
  return {
    listTasks: state.tasks.listTasks
  };
};
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
