import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Logo from "../../assets/logo.jpg";
import HamBurger from "../HamBurger/index";
// import "./Header.css";
import useStyles from "./Style";
import { useNavigate } from "react-router-dom";
import Buttons from "../buttons";

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  function handleRoute(path) {
    navigate(path);
  }
  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar
          className={classes.AppBar}
          position="static"
          style={{ backgroundColor: "red" }}
        >
          <Toolbar className={classes.Toolbar}>
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
              <Typography
                variant="h2"
                className="textHead"
                onClick={() => handleRoute("/consumer")}
              >
                Consumer
              </Typography>

              <Typography
                variant="h2"
                className="textHead"
                onClick={() => handleRoute("/supplier")}
              >
                Supplier
              </Typography>
              <Typography
                variant="h2"
                className="textHead"
                onClick={() => handleRoute("/about")}
              >
                about
              </Typography>
            </div>
            <div>
              <Buttons
                variant="outlined"
                onClick={() => {
                  handleRoute("/signin");
                }}
                className={classes.bookingBtn}
              >
                sign In
              </Buttons>

              <HamBurger />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Header;
