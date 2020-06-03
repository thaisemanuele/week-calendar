import React from "react";

import { IconButton, makeStyles } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const ConfigurationButton = () => {
  const classes = useStyles();
  return (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
    >
      <EventIcon />
    </IconButton>
  );
};

export default ConfigurationButton;
