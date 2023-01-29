import Typography from "@material-ui/core/Typography";
import Logo from "../../assets/logo.svg";
import HamBurger from "../HamBurger/index";
import React from "react";

import useStyles from "./Style";
import { useNavigate } from "react-router-dom";
import Buttons from "../buttons";
import { useSelector } from "react-redux";
import UserButton from "../userButton";

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const {
    login: { role },
    loginLoadingSucess,
  } = useSelector((state) => state.registerSlice);
  function handleRoute(path) {
    navigate(path);
  }
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.AppBar}>
          <div className={classes.Toolbar}>
            <div className={classes.logoDiv}>
              <div className={classes.logoName}>
                <img
                  onClick={() => {
                    handleRoute("/");
                  }}
                  style={{ cursor: "pointer" }}
                  width="140px"
                  className={classes.logo}
                  src={Logo}
                  alt="logo"
                />
              </div>
            </div>
            <div className={classes.headerMidData}>
              <Typography
                variant="h2"
                className="textHead"
                onClick={() => handleRoute("/")}
              >
                Home
              </Typography>

              <Typography
                variant="h2"
                className="textHead"
                onClick={() => handleRoute("/farmer")}
              >
                farmer
              </Typography>
              {role === "farmer" ? (
                ""
              ) : (
                <Typography
                  variant="h2"
                  className="textHead"
                  onClick={() => handleRoute("/consumer")}
                >
                  Consumer
                </Typography>
              )}

              <Typography
                variant="h2"
                className="textHead"
                onClick={() => handleRoute("/aboutus")}
              >
                about
              </Typography>
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              {!loginLoadingSucess ? (
                <Buttons
                  variant="outlined"
                  onClick={() => {
                    handleRoute("/signin");
                  }}
                  className={classes.bookingBtn}
                >
                  sign In
                </Buttons>
              ) : (
                <UserButton />
              )}

              <HamBurger />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
