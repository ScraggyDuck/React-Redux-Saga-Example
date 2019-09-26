import React, { Component } from "react";

import styles from "./styles";

import { withStyles } from "@material-ui/core";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <div className={classes.box}>
          <div className={classes.shape}>ReactJs</div>
          <div className={classes.shape}>Angular</div>
          <div className={classes.shape}>VueJS</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
