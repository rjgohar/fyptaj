import React from "react";
import image from "../../assets/pic.png";
import {
  Box,
  Card as MuiCard,
  CardActionArea,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

import { alpha, makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import Button from "../buttons";
const ProfileFormer = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <MuiCard className={classes.root}>
        <CardActionArea>
          <CardContent className={classes.media}>
            <img src={image} alt="" style={{}} className={classes.image} />
          </CardContent>
          <CardContent className={classes.cardTitleContainer}>
            <Box className={classes.cardadata}>
              <Typography
                gutterBottom
                variant="h3"
                className={classes.avatarLink}
              >
                name:
              </Typography>{" "}
              <Typography
                gutterBottom
                variant="h4"
                className={classes.avatarLink}
              >
                rj gohar 295
              </Typography>
            </Box>
            <Box className={classes.cardadata}>
              <Typography
                gutterBottom
                variant="h3"
                className={classes.avatarLink}
              >
                email:
              </Typography>{" "}
              <Typography
                gutterBottom
                variant="h4"
                className={classes.avatarLink}
              >
                king295@gmail.com
              </Typography>
            </Box>

            <Box className={classes.cardadata}>
              <Typography
                gutterBottom
                variant="h3"
                className={classes.avatarLink}
              >
                number:
              </Typography>{" "}
              <Typography
                gutterBottom
                variant="h4"
                className={classes.avatarLink}
              >
                +923456789
              </Typography>
            </Box>
            <Divider className={classes.cardDivider} variant="middle" />
            <Box mt={1}>
              <Typography
                variant="h4"
                component="p"
                style={{ textAlign: "start", padding: 20 }}
              >
                As a web developer, you may be responsible for designing and
                building websites and web applications using languages like
                HTML, CSS, and JavaScript. You may also be responsible for
                maintaining and updating existing websites and implementing new
                features or functionality.
              </Typography>
            </Box>

            <Box className={classes.cardButton}>
              <IconButton>
                <TwitterIcon />
              </IconButton>

              <IconButton>
                <InstagramIcon />
              </IconButton>

              <IconButton>
                <FacebookIcon />
              </IconButton>
            </Box>
            <Divider className={classes.cardDivider} variant="middle" />
          </CardContent>
        </CardActionArea>
      </MuiCard>
    </>
  );
};

export default ProfileFormer;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    margin: "auto",
    border: "1px solid " + alpha(theme.palette.text.secondary, 0.1),
    borderRadius: 16,
    height: "fit-content",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "auto",
    },
  },

  cardadata: {
    display: "flex",
    width: 200,
    margin: "auto",

    textAlign: "center",
    alignItems: "center",
    gap: 30,
  },
  media: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      left: 5,
    },
  },
  image: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    border: "5px solid white",
  },
  cardTitleContainer: {
    textAlign: "center",
    color: theme.palette.text.card,
    fontFamily: theme.typography.fontFamily,
  },

  cardLink: {
    display: "flex",
    justifyContent: "center",
    padding: "10px 0px",
  },

  avatarLink: {
    textTransform: "capitalize",
  },
  cardDivider: {},
  cardButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "30px 0px",
  },

  primaryBtn: {
    textTransform: "initial",
  },
}));
