import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Login from './Login';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateAccount from './CreateAccount';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  button: {
   margin: theme.spacing.unit,
 },
 input: {
   display: 'none',
 },
});
function redirectTo(){
   this.props.history.push("/register");
}
function TheGrid(props) {


  return(
      <Grid container spacing={24} alignItems="center" justify="center" direction="column"  >
        <Grid item xs={12}>
          <h1>Log In</h1>
        </Grid>

        <Grid item xs={12}>
          <Login/>
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Iniciar sesión
        </Button>
        <Link to="/register">
          <Button variant="contained" color="secondary">
            Regístrate
          </Button>
        </Link>
        </Grid>
      </Grid>
  );

}
TheGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TheGrid);
