import { TextField, withStyles } from "@material-ui/core";

export default withStyles((theme) => ({
  root: {
    maxWidth: "250px",
    backgroundColor: "transparent",
    border: "none",

    "& .MuiFormHelperText-root ": {
      color: theme.palette.primary.main,
      fontSize: 11,
    },

    "& .MuiOutlinedInput-root": {
      outline: "none",

      border: "1px solid " + theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-input": {
      padding: "15px 20px",
      border: "1px solid " + theme.palette.primary.main,
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "0px 10px",
    },
  },
}))(TextField);
