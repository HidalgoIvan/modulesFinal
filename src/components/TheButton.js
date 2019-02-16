import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});
class TheButton extends Component {
  render() {
    return (
      <Button variant="contained" color={this.props.color}>
        {this.props.label}
      </Button>
    );
  }
}

export default TheButton;