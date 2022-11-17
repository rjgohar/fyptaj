import { makeStyles } from "@material-ui/styles";
import bg_Img from "../../assets/bg.jpg";
const useStyles = makeStyles((theme) => ({
  maainabouthead: {
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    gap: 40,
    justifyContent: "center",
    alignItems: "center",
    height: " 600px",
    width: "100%",
    opacity: 0.8,
    backgroundImage: `url(${bg_Img})`,
    backgroungPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "& .typoHead": {
      width: 800,
      textAlign: "center",
      fontSize: "46px",
      textTransform: "capitalize",
      fontWeight: 800,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        fontSize: 30,
      },
    },
  },

  aboutLink: {
    fontSize: 22,
    width: 550,
    textAlign: "center",
    color: theme.palette.text.primary,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: 16,
    },
  },
}));
export default useStyles;
