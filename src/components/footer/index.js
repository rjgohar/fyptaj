import { Box, makeStyles, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import React from "react";
import TextField from "../input";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import logo from "../../assets/logo.svg";
import Buttons from "../buttons";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.maincontainer}>
      <div className={classes.socialContainer}>
        <Box>
          {" "}
          <Typography>Get connected with us on social networks!</Typography>
        </Box>
        <Box className={classes.innersocail}>
          <FacebookIcon className="icons" />
          <TwitterIcon className="icons" />
          <InstagramIcon className="icons" />
        </Box>
      </div>
      <Box className={classes.main}>
        <Box>
          <div className={classes.innerHead}>
            <img src={logo} alt="logo" className="logo" />
          </div>
        </Box>
        <Box>
          <Typography className={classes.heading} variant="h3">
            Agroic
          </Typography>
          <div className={classes.innerHead}>
            <Typography className="text1" variant="subtitle2">
              The purpose of Agroic is to provide connections between different
              roles in the agriculture industry. As the farmers are not getting
              a fair price for their goods because of contractors. This app
              removes the requirement of contractors for farmers. Farmers can
              buy their required needs for farming from Sellers and they can
              also sell their products to the Consumers
            </Typography>
          </div>
        </Box>

        <Box>
          <Typography className={classes.heading} variant="h1">
            Links
          </Typography>
          <div className={classes.innerHead}>
            <Typography className="text" variant="subtitle1">
              Farmer
            </Typography>
            <Typography className="text" variant="subtitle1">
              Consumer
            </Typography>
            <Typography className="text" variant="subtitle1">
              Supplier
            </Typography>
            <Typography className="text" variant="subtitle1">
              Cart
            </Typography>
          </div>
        </Box>
        <Box>
          <Typography className={classes.heading} variant="h3">
            Community
          </Typography>
          <div className={classes.contactForm}>
            <div className="inner">
              <HomeIcon className="icons" />
              <Typography className="typo" variant="subtitle2">
                {" "}
                hunza pakistan{" "}
              </Typography>
            </div>
            <div className="inner">
              <MailIcon className="icons" />
              <Typography className="typo" variant="subtitle2">
                {" "}
                example@gmail.com{" "}
              </Typography>
            </div>
            <div className="inner">
              <PhoneIcon className="icons" />
              <Typography className="typo" variant="subtitle2">
                {" "}
                + 01 234 5678
              </Typography>
            </div>
            <div className="inner">
              <WhatsAppIcon className="icons" />
              <Typography className="typo" variant="subtitle2">
                {" "}
                +1234567890
              </Typography>
            </div>
          </div>
        </Box>

        <Box>
          <Typography className={classes.heading} variant="h3">
            get in touch
          </Typography>
          <div className={classes.innerHead}>
            <Box className={classes.innerSec}>
              <Typography variant="subtitle2" className="typo">
                {" "}
                Email
              </Typography>
              <TextField variant="outlined" placeholder="Email" />
            </Box>
            <Box className={classes.innerSec}>
              <Typography variant="subtitle2" className="typo">
                {" "}
                Comments
              </Typography>
              <textarea className={classes.textarea} />
            </Box>
            <Buttons style={{ width: 200 }} variant="outlined">
              {" "}
              send me a message
            </Buttons>
          </div>
        </Box>
      </Box>

      <Box className={classes.end}>
        <Typography variant="body1">© 2022 Copyright: FYP </Typography>
      </Box>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    background: theme.palette.background.secondary,
  },
  main: {
    paddingTop: 30,
    paddingBottom: 30,
    display: "grid",
    gap: 30,
    gridTemplateColumns: "0.5fr  1fr 1fr 1fr   1fr",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "40px",
      gridTemplateColumns: "1fr",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "  1fr",
      justifyItems: "start",
      marginLeft: 20,
      gap: 20,
    },
  },
  innerSec: {
    color: theme.palette.text.primary,
    "& .typo": {
      fontSize: 20,
      paddingLeft: 15,
      textTransform: "capitalize",
      fontWeight: "bold",
    },
  },
  innerHead: {
    paddingTop: 30,
    display: "flex",
    flexDirection: "column",
    gap: 20,

    "& .logo": {
      paddingLeft: 20,
      width: 100,
      height: 100,
    },
    "& .text1": {
      fontSize: 16,
      fontWeight: 400,
      padding: "0px 40px 0px 0px",
      color: theme.palette.text.primary,
      textTransform: "capitalize",
    },

    "& .text": {
      fontSize: 17,
      fontWeight: 700,
      cursor: "pointer",
      color: theme.palette.text.primary,
      textTransform: "capitalize",
    },
    " & .button": {
      textAlign: "center",
      width: 100,
      marginLeft: 100,
    },
  },

  heading: {
    fontSize: 20,
    fontWeight: 800,
    paddingTop: 40,
    color: theme.palette.text.secondary,
    textTransform: "capitalize",
    cursor: "pointer",
  },

  contactForm: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",

    "& .inner": {
      color: theme.palette.text.primary,
      fontSize: 15,
      display: "flex",
      gap: 10,
      "& .icons": {
        width: "32px",
        color: "#fdd57d",
      },

      "& .typo": {
        fontSize: 16,
        textTransform: "capitalize",
        fontWeight: "bold",
        paddingTop: 20,
      },
    },
  },
  textarea: {
    outline: "none",
    width: 250,
    height: 150,
    backgroundColor: "transparent",
    color: theme.palette.text.primary,
    border: "3px solid" + theme.palette.text.primary,
    resize: "none",
  },

  end: {
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0px",
  },
  socialContainer: {
    display: "flex",
    padding: "70px 0px 10px 0px",
    color: theme.palette.text.primary,
    justifyContent: "space-around",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  innersocail: {
    display: "flex",
    gap: 20,
    "& .icons": {
      fontSize: 32,
    },
  },
}));
