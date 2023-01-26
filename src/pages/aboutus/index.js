import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import v1 from "../../assets/video.mp4";
import v2 from "../../assets/video1.mp4";

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.headingSec}>
        <Typography variant="h1">About Us</Typography>
      </div>
      <div className={classes.main}>
        <div className={classes.aboutone}>
          <div>
            <Typography variant="body1">
              We are a team of passionate farmers and agriculture experts who
              have come together to make a difference in the way we grow and
              consume our food. Our mission is to empower small-scale farmers
              and connect them with consumers who are looking for fresh,
              sustainable, and locally-sourced produce.
            </Typography>
            <Typography variant="body1">
              We believe that by supporting small farmers, we can promote
              biodiversity, reduce our carbon footprint, and create more
              resilient communities.We offer a wide range of products, from
              fresh fruits and vegetables, to herbs, and even honey. All of our
              products are grown using organic farming methods and are carefully
              selected to ensure the highest quality.
            </Typography>
          </div>
          <div>
            <video className={classes.videoone} loop autoPlay controls>
              <source src={v1} type="video/mp4" />{" "}
            </video>
          </div>
        </div>
        <div className={classes.abouttwo}>
          <div>
            <video className={classes.videoone} loop autoPlay controls>
              <source src={v2} type="video/mp4" />{" "}
            </video>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Typography variant="body1" gutterBottom>
              Our e-farming platform allows customers to place orders online,
              and choose from a variety of delivery options. Customers can also
              sign up for our subscription service and receive a delivery of
              fresh, seasonal produce straight to their door.
            </Typography>
            <Typography variant="body1" gutterBottom>
              We also believe in transparency and traceability. All our products
              come with detailed information about the farm where it was grown,
              including photos, videos and details about the farm and the
              farmer. We are committed to building a sustainable food system,
              and we hope that you will join us on this journey. With your
              support, we can make a real impact in the way we grow and consume
              our food.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Thank you for choosing us.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    gap: 90,
  },

  headingSec: {
    marginTop: 100,
    padding: "30px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutone: {
    width: "80%",
    margin: "auto",

    textAlign: "start",
    display: "grid",
    gap: 50,
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },

  abouttwo: {
    width: "80%",
    margin: "auto",

    textAlign: "start",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 50,

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  videoone: {
    height: 400,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
  },
}));
