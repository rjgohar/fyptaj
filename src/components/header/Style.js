import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
  logoName: {},
  logo: {
    width: "85px",
    height: "80px",
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
  logoTextMainH: {
    display: "flex",
    fontSize: "25px",
    fontWeight: "400",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      fontSize: "20px",
      flexWrap: "wrap",
    },
  },
  logoTextMainP: {
    display: "flex",
    fontSize: "25px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
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
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  Toolbar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "12vh",
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
  HeaderData: {},
  LogoData: {},
}));
export default useStyles;
