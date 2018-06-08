import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../exercises/dialogs/Create';

export default props =>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{flex: 1}}>
        Exercise Database
      </Typography>

      <CreateDialog />
    </Toolbar>
  </AppBar>
