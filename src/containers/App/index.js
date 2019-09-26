import React, { Component } from 'react';

import styles from './styles';

import TaskBoard from '../TaskBoard';

import theme from '../../commons/Theme';

import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <TaskBoard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
