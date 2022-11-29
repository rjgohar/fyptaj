import { withStyles, InputBase } from "@material-ui/core";
const InputField = withStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    border: "2px solid black",
    borderRadius: "21px",
    position: "relative",
    color: "black",
    fontSize: "14px",
    width: "100%",
    padding: "0 20px",
    "&.Mui-focused": {
      borderColor: "#17D7F5",
      transition: "0.5s ease",
    },
  },
}))(InputBase);
export default InputField;
