import {
  Box,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import TextField from "../input";
import React, { useEffect } from "react";
import Buttons from "../buttons";
import { useFormik } from "formik";
import * as yup from "yup";
import { registerUser } from "../../redux/register/register.actions";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function SignupSection() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    isUserRegistering,
    userResisgteringStatus,
    isUserRegisteringSuccess,
  } = useSelector((state) => state.registerSlice);
  const naviagte = useNavigate();

  useEffect(() => {
    let timer;
    if (isUserRegisteringSuccess) {
      timer = setTimeout(() => {
        naviagte("/");
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isUserRegisteringSuccess]);

  const initialValues = {
    userName: "",
    passowrd: "",
    email: "",
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
      };
      dispatch(registerUser(payload));
    },
  });

  return (
    <Box mb={10} className={classes.mainContainer}>
      <Box pt={8} pb={1}>
        <Typography className={classes.typo} variant="body1">
          {" "}
          hello! let's get started
        </Typography>
      </Box>
      <Box pt={8} pb={2}>
        <Typography className={classes.typo} variant="body1">
          {" "}
          userName
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
      <Box pt={2} pb={3}>
        <Typography className={classes.typo} variant="body1">
          {" "}
          Email Address / NIC
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
      <Box pt={2} pb={3}>
        <Typography className={classes.typo} variant="body1">
          {" "}
          Password
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Password"
          name="passowrd"
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
      <Box mt={3} style={{ display: "flex", justifyContent: "center" }}>
        <Buttons
          className={classes.ButtonSignin}
          variant="contained"
          type="submit"
        >
          {" "}
          Sign Up
        </Buttons>
      </Box>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: 700,
    height: 600,

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
  typo: {
    color: theme.palette.text.secondary,
    textTransform: "capitalize",
  },
  ButtonSignin: {
    width: 180,
    textTransform: "capitalize",
    fontSize: 20,
    borderRadius: 25,
    fontWeight: 500,
  },
}));
