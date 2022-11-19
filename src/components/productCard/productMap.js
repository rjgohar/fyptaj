import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CardProduct from ".";
import image from "../../assets/dalchana.jpg";

export default function ProductsMap() {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
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
      <div className={classes.gridSection}>
        {Data.map(({ text, price, location, weight, image, link }, i) => {
          return (
            <CardProduct
              key={i}
              text={text}
              price={price}
              location={location}
              weight={weight}
              image={image}
            />
          );
        })}
      </div>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: 180,
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
    image: image,
    text: " chana dhal",
    price: "50",
    location: "hunza",
    weight: "500g",
  },
  {
    image: image,
    text: " chana dhal",
    price: "50",
    location: "hunza",
    weight: "500g",
  },
  {
    image: image,
    text: " chana dhal",
    price: "50",
    location: "hunza",
    weight: "500g",
  },
  {
    image: image,
    text: " chana dhal",
    price: "50",
    location: "hunza",
    weight: "500g",
  },
  {
    image: image,
    text: " chana dhal",
    price: "50",
    location: "hunza",
    weight: "500g",
  },
];
