import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import image from "../../assets/heavy.svg";
import image1 from "../../assets/img1.svg";
import image2 from "../../assets/img2.svg";
import image3 from "../../assets/img3.svg";
import Card from "./card";
export default function CardServicesHome() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.inner}>
        <Typography className="typo1" variant="h2">
          COMPREHENSIVE SERVICES
        </Typography>
        <Typography className="typo2" variant="subtitle2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac nunc non arcu aliquet sollicitudin. Sed elementum placerat ex.
          Donec a lectus vel lectus faucibus mattis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Suspendisse ac nunc non arcu aliquet
          sollicitudin. Sed elementum placerat ex. Donec a lectus vel lectus
          faucibus mattis
        </Typography>
      </div>
      <div className={classes.gridSection}>
        {Data.map(({ heading, description, image }, i) => {
          return (
            <Card
              key={i}
              heading={heading}
              description={description}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    background: theme.palette.background.bg,
  },

  inner: {
    width: "90%",
    color: theme.palette.text.secondary,
    margin: "auto",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },

    "& .typo1": {
      padding: "50px  0px",
      [theme.breakpoints.down("sm")]: {
        padding: "10px 0px",
      },
    },
    "& .typo2": {
      fontSize: 18,
      padding: "20px  0px",
      [theme.breakpoints.down("sm")]: {
        padding: "10px 0px",
      },
    },
  },
  gridSection: {
    padding: " 60px 0px",
    display: "flex",
    flexWrap: "wrap",
    width: "80%",
    margin: "0 auto",
    gap: 60,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "center",
    },
  },
}));

export const Data = [
  {
    heading: "Heavy Machine",
    image: image,
    description:
      "No need to worry of labour costing more. Just rent all types of machine here!!",
  },
  {
    heading: " Consumer",
    image: image1,
    description:
      " Why to visit Super Store and Pay High? Order all products and get deliver at your doorstep.",
  },
  {
    heading: "supplier",
    image: image3,
    description:
      " Now you produce. And we are here to sell your product. Just list your sell, and get proper pay for it.",
  },
  {
    heading: " Gardening Kits",
    image: image2,
    description:
      " We provides all of the gardening related products i.e seeds, pestisides and heavy machine.",
  },
];
