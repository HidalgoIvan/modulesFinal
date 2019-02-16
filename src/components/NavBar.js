import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo from './logo.jpg';
const styles = {
  root: {
    flexGrow: 1,
  },
  image: {
    width: 80,
    height: 60
  },
  justifier: {
    textAlign: 'center',
  }
};

function NavBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
        <Grid container spacing={24} alignItems="center" justify-text="center">
          <Grid item xs={2}>
          <img style={styles.image} src={logo}/>
          </Grid>
          <Grid item xs={8}>
          <Typography variant="h6" color="inherit"  style={styles.justifier}>
            Nuestra aplicación
          </Typography>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);