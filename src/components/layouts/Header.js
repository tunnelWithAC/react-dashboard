import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../exercises/Dialog';

export default ({ muscles, onExerciseCreate }) =>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{flex: 1}}>
        Exercise Database
      </Typography>

      <CreateDialog
        muscles={muscles}
        onCreate={onExerciseCreate}
      />
    </Toolbar>
  </AppBar>
