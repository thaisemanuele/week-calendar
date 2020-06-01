import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Chip } from "@material-ui/core";

import EventIcon from "@material-ui/icons/Event";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflow: "scroll",
    width: "100%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    padding: 10,
    width: "max-content",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
    paddingBottom: theme.spacing(1),
  },
}));

export default function HolidayCard({ name, type }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" color="textSecondary">
            {name}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Chip
            variant="outlined"
            color="secondary"
            size="small"
            icon={<EventIcon />}
            label={type}
          />
        </div>
      </div>
    </Card>
  );
}
