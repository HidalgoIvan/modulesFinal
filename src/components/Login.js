import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
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
});

class Login extends Component{

  render(){
    return(
      <div>
        <Grid item xs={12}>
        <TextField
          id="User"
          label="Usuario"
          margin="normal"
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="Pswd"
          label="Password"
          margin="normal"
        />
        </Grid>
        </div>
    );
  }
}
export default withStyles(styles)(Login);
