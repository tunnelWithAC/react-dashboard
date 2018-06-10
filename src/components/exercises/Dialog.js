import React, { Component, Fragment } from 'react';
import {
  Dialog,
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Form from './Form';

export default class extends Component {

  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  render() {
    const { open } = this.state,
          { muscles, onCreate } = this.props


    return <Fragment>
      <Button variant="fab" onClick={this.handleToggle} mini>
        <Add/>
      </Button>

      <Dialog
        open={open}
        onClose={this.handleToggle}
      >
          <DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>
            <Form
              muscles={muscles}
              onSubmit={onCreate}
            />
          </DialogContent>
        </Dialog>
    </Fragment>
  }
}
