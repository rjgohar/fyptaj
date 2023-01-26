import { Box, FormHelperText, makeStyles, Typography } from "@material-ui/core";
import TextField from "../input";
import React, { useEffect, useState } from "react";
import { Alert } from "@material-ui/lab";

import Buttons from "../buttons";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { loginSchema } from "./schema";
import { useDispatch, useSelector } from "react-redux";
import {
  LoginUser,
  resetRegisteringUser,
} from "../../redux/register/register.actions";

export default function LoginSection() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loginLoadingSucess, loginLoadingFailed } = useSelector(
    (state) => state.registerSlice
  );

  useEffect(() => {
    if (loginLoadingSucess) {
      navigate("/");
    }
  }, [loginLoadingSucess]);

  useEffect(() => {
    if (error && loginLoadingFailed) {
      setTimeout(() => {
        dispatch(resetRegisteringUser());
      }, 1000);
    }
  }, [error, loginLoadingFailed]);
  return (
    <Box mb={10} className={classes.mainContainer}>
      <Box pt={6} pb={3}>
        <Typography variant="h2" className={classes.typo}>
          Sigin In
        </Typography>
      </Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          const payload = {
            email: values.email,
            password: values.password,
          };
          dispatch(LoginUser(payload));
        }}
      >
        {({
          errors,
          touched,
          values,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            {loginLoadingSucess && (
              <Alert severity="success" style={{ fontSize: 16 }}>
                Log In success
              </Alert>
            )}

            {error && loginLoadingFailed && (
              <Alert severity="error" style={{ fontSize: 16 }}>
                {error}
              </Alert>
            )}

            <br />

            <Box>
              <TextField
                variant="outlined"
                placeholder="Email"
                type="email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                fullWidth
                label="Email"
              />
              {errors.email && touched.email ? (
                <FormHelperText className={classes.helpertext} error>
                  {errors.email}
                </FormHelperText>
              ) : null}
            </Box>
            <Box pt={2}>
              <TextField
                variant="outlined"
                placeholder="Password"
                type="password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                fullWidth
                label="Password"
              />
              {errors.password && touched.password ? (
                <FormHelperText className={classes.helpertext} error>
                  {errors.password}
                </FormHelperText>
              ) : null}
            </Box>

            <Box pt={2} display="flex" justifyContent="center">
              <Buttons
                className={classes.btn}
                variant="contained"
                color="primary"
                type="submit"
              >
                Log In
              </Buttons>
            </Box>
          </Form>
        )}
      </Formik>
      <Box mt={3} style={{ display: "flex" }}>
        <Typography className={classes.typo} variant="body1">
          New Customer?
        </Typography>
        <Link to="/signup">
          <Typography style={{ color: "blue" }} className={classes.typo}>
            Register
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: 600,
    height: 500,
    color: theme.palette.text.secondary,
    borderRadius: "8px",
    background: theme.palette.background.alpha,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  typo: {
    textAlign: "center",
    textTransform: "capitalize",
    color: theme.palette.text.secondary,
  },
  ButtonSignin: {
    width: 180,
    textTransform: "capitalize",
    fontSize: 20,
    borderRadius: 25,
    fontWeight: 500,
  },
  formWrapper: {
    display: "grid",
    placeContent: "center",
  },
  helpertext: {
    fontSize: 12,
  },

  btn: {
    width: 100,
  },
}));
