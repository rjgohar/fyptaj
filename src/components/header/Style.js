import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {},
  AppBar: {
    width: "100%",
    background: theme.palette.background.main,
  },
  logoDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "green",
    marginLeft: "25px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "3px",
    },
  },

  logo: {
    width: "130px",
    height: "30px",
    borderRadius: "40px",
    [theme.breakpoints.down("sm")]: {
      width: "55px",
      height: "50px",
      marginLeft: "0px",
    },
  },
  logoText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "12px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  iconCard: {
    color: theme.palette.text.primary,
    width: 42,
    "& :hover": {
      cursor: "pointer",
    },
  },
  headerMidData: {
    display: "flex",

    color: theme.palette.text.primary,
    gap: 30,

    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },

    "& .textHead": {
      textTransform: " capitalize",
      fontSize: 18,
      "&:hover": {
        cursor: "pointer",
      },
    },
  },

  title: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "10vh",
    background: theme.palette.background.main,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
  bookingBtn: {
    width: 100,
    marginRight: "45px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
export default useStyles;
