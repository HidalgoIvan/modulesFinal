import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});
class InputField extends Component {
  render() {
    return (
      <TextField
          label={this.props.placeholder}
          placeholder={this.props.placeholder}
          type={this.props.type}
          margin="normal"
        />
    );
  }
}

export default InputField;