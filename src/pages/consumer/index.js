import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

import ProductsMap from "../../components/productCard/productMap";
import SearchBar from "../../components/searchBar";

export default function Consumer() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.inner}>
        <Typography className="typo1" variant="h2">
          CONSUMER
        </Typography>
        <Typography className="typo2" variant="subtitle2">
          No need to visit field to get grains!!! Just order here and and get
          all kinds of garins deliverd at your doorstep. Why to wait? Go and
          order.
        </Typography>
      </div>
      <div className={classes.endone}>
        <SearchBar />
        <ProductsMap />
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: 30,
  },
  inner: {
    width: "80%",
    color: theme.palette.text.secondary,
    margin: "auto",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },

    "& .typo1": {
      padding: "40px  0px",
      [theme.breakpoints.down("sm")]: {
        padding: "10px 0px",
      },
    },
    "& .typo2": {
      fontSize: 18,
      padding: "5px  0px",
      [theme.breakpoints.down("sm")]: {
        padding: "10px 0px",
      },
    },
  },
  endone: {
    display: "flex",
    gap: 20,
    flexDirection: "column",
    marginBottom: 30,
  },
}));
