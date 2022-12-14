import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../buttons";

export default function Card({ text, description, link }) {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <div className={classes.heading}>
        <Typography variant="h3"> {text}</Typography>
      </div>

      <div>
        <Typography className={classes.description} variant="subtitle1">
          {" "}
          {description}
        </Typography>
      </div>

      <div className={classes.btn}>
        <Link to={link}>
          <Buttons variant="contained"> explore more</Buttons>
        </Link>
      </div>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    width: 550,

    borderRadius: "5px",
    textAlign: "center",
    border: "2px solid" + theme.palette.background.border,
  },

  heading: {
    padding: "15px 0px",
    color: theme.palette.text.secondary,
  },

  description: {
    padding: 10,
    fontSize: 18,
    color: theme.palette.text.secondary,
  },

  btn: {
    padding: " 20px 0px",
  },
}));
