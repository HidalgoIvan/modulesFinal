import React, { Component } from 'react';
import InputField from './InputField';
import TheButton from './TheButton';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
function CenteredGrid(props) {
  const { classes } = props;
    return (
    <div className={classes.root}>
      <Grid container spacing={24} alignItems="center" direction="column">
          <Grid item xs={12}>
            <h1>Crear Usuario</h1>
          </Grid>
          <Grid item xs={12}>
          <InputField placeholder={'Nombre'}/>
          </Grid>
          <Grid item xs={12}>
          <InputField placeholder={'Usuario'}/>
          </Grid>
          <Grid item xs={12}>
          <InputField placeholder={'Contraseña'} type={'password'}/>
          </Grid>
          <Grid item xs={12}>
          <InputField placeholder={'Correo'}/>
          </Grid>
          <Grid item xs={12}>
          <InputField placeholder={'Dirección'}/>
          </Grid>
          <Grid item xs={12}>
          <TheButton color={'secondary'} label={'Cancelar'}/>
          </Grid>
          <Grid item xs={12}>
          <TheButton color={'primary'} label={'Crear Usuario'}/>
          </Grid>
      </Grid>
    </div>
    );
  }

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
