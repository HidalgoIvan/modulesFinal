import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Login from './Login';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

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

function TheGrid(props) {


  return(
    <Grid
    container
    spacing={24}
    alignItems="center"
    justify="center"
    direction="column"
    style={{ minHeight: '100vh' }} >
    <Grid item xs={2}>
      <h1>Log In</h1>
    </Grid>

    <Grid item xs={12}>
      <Login/>
    </Grid>
    <Grid item xs={12}>
      <Button variant="contained" color="primary">
        Iniciar sesión
      </Button>
      <Button variant="contained" color="secondary">
        Regístrate
      </Button>
    </Grid>

    </Grid>
  );

}
TheGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TheGrid);
