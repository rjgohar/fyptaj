import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import SignupSection from "../../components/signup";

function Signup() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box>
        <SignupSection />
      </Box>
    </Box>
  );
}

export default Signup;
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: 100,
    // height: "90vh",
    background: theme.palette.background.footer,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleHead: {
    paddingRight: 20,
    fontSize: 36,
    fontweight: 500,
    color: theme.palette.primary.main,
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
      fontweight: 500,
    },
  },
}));
