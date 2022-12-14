import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import { Link } from "react-router-dom";
import Buttons from "../buttons";

export default function CardProduct({
  image,
  rate,
  quantity,
  productTitle,
  productId,
}) {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <div className={classes.heading}>
        <div>
          <img
            className={classes.image}
            src={`http://localhost:8000/static/${image}`}
            alt="pic"
          />
        </div>
        <Typography variant="h3"> {productTitle}</Typography>
      </div>

      <div className={classes.sectionProduct}>
        <Typography variant="h4">price:</Typography>
        <Typography variant="">RS {rate}</Typography>
      </div>
      <div className={classes.sectionProduct}>
        <Typography variant="h4">Product Size:</Typography>
        <Typography variant="">{quantity} KG</Typography>
      </div>

      <div className={classes.btn}>
        <Link to={`/product/${productId}`}>
          <Buttons className={classes.btnSe} variant="contained">
            {" "}
            preview here{" "}
          </Buttons>
        </Link>
      </div>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    width: 300,

    borderRadius: "15px",
    textAlign: "center",
    border: "2px solid" + theme.palette.background.border,
  },

  heading: {
    padding: "15px 0px",
    color: theme.palette.text.secondary,
  },
  image: {
    width: 280,
  },
  description: {
    padding: 10,
    fontSize: 18,
    color: theme.palette.text.secondary,
  },

  btn: {
    padding: " 20px 0px",
  },
  btnSe: {
    borderRadius: "50px",
  },
  sectionProduct: {
    color: theme.palette.text.secondary,
    display: "flex",
    padding: "5px 15px",
    justifyContent: "space-between",
  },
}));
