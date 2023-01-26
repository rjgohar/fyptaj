import {
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  makeStyles,
  Select,
  Typography,
} from "@material-ui/core";
import TextField from "../input";
import React, { useEffect } from "react";
import Buttons from "../buttons";
import { useFormik } from "formik";
import * as yup from "yup";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { registerUser } from "../../redux/register/register.actions";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";

export default function SignupSection() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    isUserRegistering,
    userResisgteringStatus,
    isUserRegisteringSuccess,
    isUserRegisteringFailed,
  } = useSelector((state) => state.registerSlice);
  const naviagte = useNavigate();

  useEffect(() => {
    let timer;
    if (isUserRegisteringSuccess) {
      timer = setTimeout(() => {
        naviagte("/signin");
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isUserRegisteringSuccess]);

  const initialValues = {
    userName: "",
    passowrd: "",
    email: "",
    role: "",
  };
  const signUpSchema = yup.object({
    userName: yup.string().required("user name is required"),
    passowrd: yup.string().required("password is required").min(5),
    email: yup.string().email("Invalid email format").required("Required"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const payload = {
        email: values.email,
        username: values.userName,
        password: values.passowrd,
        role: values.role,
      };
      dispatch(registerUser(payload));
    },
  });

  return (
    <Box className={classes.mainContainer}>
      {isUserRegisteringSuccess && (
        <Alert severity="success" style={{ fontSize: 16 }}>
          Registered SuccessFully
        </Alert>
      )}

      {isUserRegisteringFailed && (
        <Alert severity="error" style={{ fontSize: 16 }}>
          Something went really wrong
        </Alert>
      )}

      <br />
      <Box>
        <Typography className={classes.typoSignUp} variant="h2">
          {" "}
          Hello! let's get started
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Box pt={2} pb={2}>
          <Typography className={classes.typo} variant="body1">
            {" "}
            User Name
          </Typography>
          <TextField
            name="userName"
            variant="outlined"
            placeholder="UserName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.userName && formik.errors.userName}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
          />
        </Box>
        <Box pb={3}>
          <Typography className={classes.typo} variant="body1">
            {" "}
            Email Address
          </Typography>
          <TextField
            variant="outlined"
            placeholder="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
        </Box>
        <Box pb={3}>
          <Typography className={classes.typo} variant="body1">
            {" "}
            Password
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Password"
            name="passowrd"
            type="password"
            value={formik.values.passowrd}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.passowrd && formik.errors.passowrd}
            error={formik.touched.passowrd && Boolean(formik.errors.passowrd)}
          />
        </Box>
        <Typography
          style={{ color: "#fff", fontSize: "16px", textAlign: "center" }}
        ></Typography>
        <div>
          <div>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Role
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={formik.handleChange}
                label="Age"
                name="role"
                MenuProps={{ className: classes.menulist }}
              >
                <MenuItem value={"user"}>User</MenuItem>
                <MenuItem value={"farmer"}>Farmer</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <Box mt={3} style={{ display: "flex", justifyContent: "center" }}>
          <Buttons
            className={classes.ButtonSignin}
            variant="contained"
            type="submit"
          >
            {" "}
            {isUserRegistering && !isUserRegisteringSuccess ? (
              <CircularProgress />
            ) : (
              "Sign Up"
            )}
          </Buttons>
        </Box>
      </form>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: 600,
    height: 565,
    marginBottom: 80,
    marginTop: 30,
    borderRadius: "8px",
    background: theme.palette.background.alpha,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  menulist: {
    "& .MuiMenu-paper": {
      background: "#323232",
    },
    color: "",
  },

  mainbtn: {
    width: 220,
    borderRadius: 5,
  },
  typo: {
    color: theme.palette.text.primary,
    textTransform: "capitalize",
  },
  typoSignUp: {
    color: theme.palette.text.primary,
    fontWeight: 800,
    textTransform: "capitalize",
  },
  ButtonSignin: {
    width: 180,
    textTransform: "capitalize",
    fontSize: 20,
    borderRadius: 25,
    fontWeight: 500,
  },
  formControl: {
    width: "100%",
    "& .MuiSelect-icon": {
      top: 0,
    },
  },
}));
