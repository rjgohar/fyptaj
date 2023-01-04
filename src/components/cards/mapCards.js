import { makeStyles } from "@material-ui/core";
import React from "react";
import Card from ".";

export default function MapCard() {
  const classes = useStyles();
  return (
    <div className={classes.gridSection}>
      {Data.map(({ text, description, link }, i) => {
        return (
          <Card key={i} text={text} description={description} link={link} />
        );
      })}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  gridSection: {
    width: "80%",
    margin: "0 auto",
    padding: "90px 0px",
    display: "flex",
    flexWrap: "wrap",
    gap: 40,
  },
}));

export const Data = [
  {
    text: "Farmer",
    description:
      "If you are a farmer then you are at perfect platfrom from where you can order all of your farming related products and you can sell your production also. ",
    link: "/farmer",
  },
  {
    text: "Supplier",
    description:
      "Sell your wide variety of products related to farming, through our platform. We have millions of farmers connected from all parts of country.",

    link: "/signin",
  },
];
