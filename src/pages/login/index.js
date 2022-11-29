import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import LoginSection from "../../components/login";

function Login() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box pt={5} pb={3}></Box>
      <Box>
        <LoginSection />
      </Box>
    </Box>
  );
}

export default Login;
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 90,
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
