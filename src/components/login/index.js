import { Box, makeStyles, Typography } from "@material-ui/core";
import TextField from "../input";
import React from "react";

import Buttons from "../buttons";
import { Link } from "react-router-dom";

export default function LoginSection() {
  const classes = useStyles();
  return (
    <Box mb={10} className={classes.mainContainer}>
      <Box pt={6}>
        <Typography variant="h2" className={classes.typo}>
          Sigin In
        </Typography>
      </Box>
      <Box pt={8} pb={2}>
        <Typography variant="body1"> Email Address / NIC *</Typography>
        <TextField variant="outlined" placeholder="Email Address / NIC *" />
      </Box>
      <Box pt={3} pb={3}>
        <Typography variant="body1">Password *</Typography>
        <TextField variant="outlined" placeholder="Password" />
      </Box>
      <Box mt={3}>
        <Link to="/">
          <Buttons className={classes.ButtonSignin} variant="contained">
            sign in
          </Buttons>
        </Link>
      </Box>
      <Box mt={3} style={{ display: "flex" }}>
        <Typography className={classes.typo} variant="body1">
          New Customer?
        </Typography>
        <Link to="/signup">
          <Typography style={{ color: "blue" }} className={classes.typo}>
            Register
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: 600,
    height: 500,
    color: theme.palette.text.secondary,
    borderRadius: "8px",
    background: theme.palette.background.alpha,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  typo: {
    textAlign: "center",
    textTransform: "capitalize",
    color: theme.palette.text.secondary,
  },
  ButtonSignin: {
    width: 180,
    textTransform: "capitalize",
    fontSize: 20,
    borderRadius: 25,
    fontWeight: 500,
  },
}));
