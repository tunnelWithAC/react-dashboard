import React, { Component, Fragment } from 'react';
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

export default class extends Component {

  constructor() {
    super();
    this.state = { open: false };
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open } = this.state;

    return <Fragment>
      <Button variant="fab" onClick={this.handleToggle.bind(this)} mini>
        <Add/>
      </Button>

      <Dialog
        open={open}
        onClose={this.handleToggle.bind(this)}
      >
          <DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="raised">
              Create
            </Button>
          </DialogActions>
        </Dialog>
    </Fragment>
  }
}
