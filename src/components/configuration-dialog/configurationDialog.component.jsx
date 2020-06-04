import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { makeStyles, Dialog } from "@material-ui/core";
import FirstDaySelector from "../first-day-selector/firstDaySelector.component";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "black",
    position: "absolute",
    top: 54,
    left: 0,
  },
  paper: {
    width: "70%",
    maxHeight: 435,
  },
}));

const ConfigurationDialog = ({ isOpen, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog open={isOpen} onClose={handleClose} classes={classes}>
      <List component="div" role="list">
        <ListItem button divider disabled role="listitem">
          <ListItemText primary="Configure your Calendar" />
        </ListItem>
        <FirstDaySelector />
      </List>
    </Dialog>
  );
};

export default ConfigurationDialog;
