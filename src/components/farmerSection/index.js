import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import CardFarmer from "./card";

export default function MapCardFarmer() {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <div className={classes.inner}>
        <Typography className="typo1" variant="h2">
          FARMER
        </Typography>
        <Typography className="typo2" variant="subtitle2">
          If you are a farmer then you are at perfect platfrom from where you
          can order all of your farming related products and you can sell your
          production also.
        </Typography>
      </div>
      <div className={classes.gridSection}>
        {Data.map(({ description }, i) => {
          return <CardFarmer key={i} description={description} />;
        })}
      </div>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: 40,
  },
  gridSection: {
    width: "80%",
    margin: "0 auto",
    padding: "90px 0px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 40,
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
}));

export const Data = [
  {
    description: "Sell Your Producing Material through Us",
  },
];
