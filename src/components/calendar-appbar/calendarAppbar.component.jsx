import React from "react";

import { Typography, Toolbar, AppBar, makeStyles } from "@material-ui/core";

import ConfigurationButton from "../configuration-button/configurationButton.component";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const CalendarAppBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <ConfigurationButton />
        <Typography variant="h6" className={classes.title}>
          My Calendar
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CalendarAppBar;
