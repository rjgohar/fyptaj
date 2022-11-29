import {
  Fade,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Paper,
  Popper,
} from "@material-ui/core";
import { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useDispatch } from "react-redux";
import { resetRegisteringUser } from "../../redux/register/register.slicer";
const UserButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "transitions-popper" : undefined;

  const handleLogout = () => {
    dispatch(resetRegisteringUser());
    handleClose();
  };
  return (
    <div className={classes.root}>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AccountCircleIcon />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div>
          <MenuItem className={classes.menu} onClick={handleLogout}>
            Logout{" "}
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
};

export default UserButton;
const useStyles = makeStyles((theme) => ({
  menu: {
    color: "#323232",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fontSize: 40,
    },
  },
}));
