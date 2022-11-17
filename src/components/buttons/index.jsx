import { Button, withStyles } from "@material-ui/core";

const Buttons = withStyles((theme) => ({
  outlined: {
    border: "2px solid white",
    borderRadius: "50px",
    backgroundColor: "transparent",
    color: "white",
    padding: "10px 10px",
    fontWeight: 800,
    fontSize: "15.0163px",
    textTransform: "capitalize",
  },

  contained: {
    border: `2px solid ${theme.palette.background.blue}`,
    borderRadius: "3px",
    backgroundColor: theme.palette.background.blue,
    color: "white",
    padding: "5px 8.5px",
    fontWeight: 600,
    fontSize: "15px",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: theme.palette.background.blue,
    },
  },
  text: {
    border: "2px solid white",
    borderRadius: "3px",
    backgroundColor: "transparent",
    color: "white",
    padding: "0 30px",
    fontWeight: 600,
    fontSize: "15px",
    textTransform: "capitalize",
  },
}))(Button);
export default Buttons;
