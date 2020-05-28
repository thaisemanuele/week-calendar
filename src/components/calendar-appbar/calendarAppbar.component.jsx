import React from "react";

import {
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  makeStyles,
} from "@material-ui/core";

import EventIcon from "@material-ui/icons/Event";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <EventIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          My Calendar
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CalendarAppBar;
