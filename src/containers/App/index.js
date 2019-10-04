import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import theme from '../../commons/Theme';
import configureStore from '../../redux/configureStore';
import TaskBoard from '../TaskBoard';
import styles from './styles';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <TaskBoard />
          <ToastContainer />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
