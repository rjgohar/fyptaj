import { InputBase, makeStyles } from "@material-ui/core";
import React from "react";
import SvgIcon from "../../assets/search.svg";
const SearchBar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.SearchBox}>
      <InputBase className={classes.input} placeholder="search" {...props} />
      <img src={SvgIcon} search width="24.75px" />
    </div>
  );
};

export default SearchBar;
const useStyles = makeStyles((theme) => ({
  SearchBox: {
    marginTop: 20,
    width: "78%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "11px",
    border: "2px solid " + theme.palette.secondary.main,
    padding: "5px 10px 5px 15px",
    gap: "20px",
    "& .MuiInputBase-input": {
      color: "black",
    },
  },
  input: {
    width: "100%",
  },
}));
