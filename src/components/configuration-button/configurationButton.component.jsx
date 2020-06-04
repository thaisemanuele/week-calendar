import React, { useState } from "react";

import { IconButton, makeStyles } from "@material-ui/core";
import EventIcon from "@material-ui/icons/Event";
import ConfigurationDialog from "../configuration-dialog/configurationDialog.component";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: "#276fa0",
  },
}));

const ConfigurationButton = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <EventIcon />
      </IconButton>
      <ConfigurationDialog isOpen={open} handleClose={handleClick} />
    </div>
  );
};

export default ConfigurationButton;
