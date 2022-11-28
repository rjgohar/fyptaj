import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import InputField from "../../components/inputField";
import Button from "../../components/button";
import UploadImage from "../../components/dropFileInput";

const UploadFile = () => {
  const classes = useStyle();

  const CHARACTER_LIMIT = 20;
  const CHARACTER_LIMIT_PARA = 50;
  const [values, setValues] = React.useState({
    title: "",
    para: "",
  });

  const handleChngTitl = (title) => (event) => {
    setValues({ ...values, [title]: event.target.value });
  };
  const handleChngPara = (para) => (event) => {
    setValues({ ...values, [para]: event.target.value });
  };

  return (
    <Box className={classes.mainMint}>
      <Box className={classes.leftMint}>
        <UploadImage />
      </Box>

      <Box className={classes.rightMint}>
        <Box className={classes.title}>
          <Typography variant="h2">Upload Items</Typography>
        </Box>
        <Box className={classes.fields}>
          <InputField
            placeholder="Product Name"
            className={classes.tagInput}
            // label="Limit"
            inputProps={{
              maxlength: CHARACTER_LIMIT,
            }}
            value={values.name}
            onChange={handleChngTitl("Product")}
          />
          <InputField
            placeholder="Rate"
            className={classes.tagInput}
            // label="Limit"
            inputProps={{
              maxlength: CHARACTER_LIMIT,
            }}
            value={values.name}
            onChange={handleChngTitl("Product")}
          />
          <InputField
            placeholder="Quality"
            className={classes.tagInput}
            // label="Limit"
            inputProps={{
              maxlength: CHARACTER_LIMIT,
            }}
            value={values.name}
            onChange={handleChngTitl("Product")}
          />
        </Box>

        <Box className={classes.roundBox}>
          <InputField
            placeholder=" Write Description "
            rows={6}
            multiline
            style={{ height: 150 }}
            className={classes.forArea}
            inputProps={{
              maxlength: CHARACTER_LIMIT_PARA,
            }}
            value={values.para}
            onChange={handleChngPara("para")}
          />
        </Box>
        <Box>
          <Typography variant="body1" className={classes.pdingCount}>
            {`${values.para.length}/${CHARACTER_LIMIT_PARA}`}
          </Typography>
        </Box>

        <Box className={classes.btns}>
          <Box>
            <Button variant="contained" className={classes.connectButton}>
              Save Data
            </Button>
          </Box>
          <Box>
            <Button variant="outlined" className={classes.connectButton}>
              discard
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadFile;

const useStyle = makeStyles((theme) => ({
  fields: {
    marginTop: 5,
    display: "flex",
    flexDirection: " column",
    gap: 10,
  },

  connectButton: {
    color: "black",
    backgroundColor: "transparent",
    borderColor: "black",
  },
  mainMint: {
    margin: 50,
    height: "fitContent",
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "1fr 1fr",
    paddingBottom: "20px",
    gap: 90,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gap: 0,
    },
  },
  leftMint: {
    display: "flex",
    justifyContent: "center",

    marginTop: 50,
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
      height: 425.81,
      paddingLeft: 0,
    },
  },
  rightMint: {
    display: "flex",
    // justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    paddingTop: 10,
  },
  mintheading: {
    fontSize: "8vw",
    letterSpacing: "1.6px",
  },

  spnitem: {
    marginLeft: "10px",
  },
  underinpt: {
    color: "#FFFFFF",
    borderBottom: " solid #17D7F5",
    fontSize: "18.96px",
    "&.Mui-underline:after": {
      borderBottom: "none",
    },
  },
  agremntOverall: {
    lineHeight: "39px",
    fontWeight: "500",
    fontSize: "19.31px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  agremnttypo: {
    display: "flex",
    flexDirection: "row",
  },
  subagremnttypo: {
    color: "#FFFFFF",
    display: "flex",

    alignItems: "center",
  },
  agremntterms: {
    display: "flex",
    alignItems: "center",
    marginLeft: "5px",
    color: "#17D7F5",
  },
  checbxicn: {
    color: "#D9D9D9",
    borderRadius: "7.3722px",
  },
  termscondation: {
    color: "#FFFFFF",
    fontSize: "16.6414px",
    textAlign: "Justified",
    fontFamily: "Poppins",
  },
  forArea: {
    color: "black",
    borderColor: "black",
  },

  two: {
    display: "flex",
    paddingTop: "18px",
  },
  linkStyle: {
    textDecoration: "none",
    color: "#17D7F5",
  },
  roundBox: {
    paddingTop: "30px",
  },

  tagInput: {
    // borderBottom: "2px solid black",
    // border: "none",
    fontFamily: "Poppins",
    color: "black",
    borderRadius: 30,
    padding: "0 10px",
  },
  typopara: {
    paddingTop: "35px",
  },
  btns: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    paddingTop: "25px",
    gap: 25,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      gap: 10,
    },
  },
  pdingCount: {
    color: "black",
    paddingTop: "5px",
  },
  title: {
    marginTop: 50,
  },
}));
