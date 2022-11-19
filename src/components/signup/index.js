import {
  Box,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import TextField from "../input";
import React from "react";
import Buttons from "../buttons";
import { Link } from "react-router-dom";

export default function SignupSection() {
  const classes = useStyles();

  return (
    <Box mb={10} className={classes.mainContainer}>
      <Box pt={8} pb={1}>
        <Typography className={classes.typo} variant="body1">
          {" "}
          hello! let's get started
        </Typography>
      </Box>
      <Box pt={8} pb={2}>
        <Typography className={classes.typo} variant="body1">
          {" "}
          userName
        </Typography>
        <TextField name="userName" variant="outlined" placeholder="UserName" />
      </Box>
      <Box pt={2} pb={3}>
        <Typography className={classes.typo} variant="body1">
          {" "}
          Email Address / NIC
        </Typography>
        <TextField
          variant="outlined"
          placeholder="email"
          name="Email Address / NIC *"
        />
      </Box>
      <Box pt={2} pb={3}>
        <Typography className={classes.typo} variant="body1">
          {" "}
          Password
        </Typography>
        <TextField variant="outlined" placeholder="Password" name="passowrd" />
      </Box>
      <Typography
        style={{ color: "#fff", fontSize: "16px", textAlign: "center" }}
      ></Typography>
      <Box mt={3} style={{ display: "flex", justifyContent: "center" }}>
        <Buttons
          className={classes.ButtonSignin}
          variant="contained"
          type="submit"
        >
          {" "}
          Sign Up
        </Buttons>
      </Box>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: 700,
    height: 600,

    borderRadius: "8px",
    background: theme.palette.background.alpha,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  typo: {
    color: theme.palette.text.secondary,
    textTransform: "capitalize",
  },
  ButtonSignin: {
    width: 180,
    textTransform: "capitalize",
    fontSize: 20,
    borderRadius: 25,
    fontWeight: 500,
  },
}));
