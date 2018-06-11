import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Dialog from '../exercises/Dialog';

export default ({ muscles, onExerciseCreate }) =>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{flex: 1}}>
        Exercise Database
      </Typography>

      <Dialog
        muscles={muscles}
        onCreate={onExerciseCreate}
      />
    </Toolbar>
  </AppBar>
