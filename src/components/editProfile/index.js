import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const EditProfile = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Box>
        <Typography varient="h1" className={classes.heading}>
          Update your personal data
        </Typography>
      </Box>
      <Box className={classes.row}>
        <Box>
          <input type="text" placeHolder="User ID" className={classes.input} />
        </Box>
        <Box>
          <input type="text" placeHolder="CNIC" className={classes.input} />
        </Box>
      </Box>
      <Box className={classes.row}>
        <Box>
          <input type="text" placeHolder="Email" className={classes.input} />
        </Box>
        <Box>
          <input type="text" placeHolder="Location" className={classes.input} />
        </Box>
      </Box>
      <Box className={classes.desc}>
        <Box>
          <input
            type="text"
            placeHolder="Description"
            className={classes.descInput}
          />
        </Box>
        <Box>
          <button type="submit" className={classes.submitBtn}>
            Update Now
          </button>
        </Box>
      </Box>
    </Box>
  );
};
export default EditProfile;
const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    height: "100vh",
    marginTop: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  heading: {
    fontSize: "35px",
    color: "#1BA665",
  },
  input: {
    width: "350px",
    height: "40px",
    marginTop: "20px",
    paddingLeft: "12px",
    fontSize: "22px",
    border: "2px solid #1BA665",
    borderRadius: "5px",
  },
  [theme.breakpoints.down("md")]: {
    width: "250px",
  },
  row: {
    width: "50%",
    display: "flex",
    justifyContent: "space-between",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
  desc: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  descInput: {
    width: "750px",
    height: "250px",
    marginTop: "20px",
    border: "2px solid #1BA665",
    fontSize: "22px",
  },
  submitBtn: {
    width: "100%",
    marginTop: "20px",
    padding: "12px 310px",
    backgroundColor: "#1BA665",
    color: "white",
    border: "none",
    fontSize: "22px",
    borderRadius: "24px",
  },
}));
