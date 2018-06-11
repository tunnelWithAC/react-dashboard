import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Dialog from '../exercises/Dialog';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, purple} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: { main: green[500] }, // Purple and green play nicely together.
    type: 'dark',
  },
});

export default ({ muscles, onExerciseCreate }) =>
  <MuiThemeProvider theme={theme}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline"  style={{flex: 1}}>
          Exercise Database
        </Typography>

        <Dialog
          muscles={muscles}
          onCreate={onExerciseCreate}
        />
      </Toolbar>
    </AppBar>
  </MuiThemeProvider>
