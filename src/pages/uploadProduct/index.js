import React, { useEffect } from "react";
import {
  Box,
  CircularProgress,
  FormControl,
  FormHelperText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import InputField from "../../components/inputField";
import Button from "../../components/button";
import UploadImage from "../../components/dropFileInput";
import { useFormik } from "formik";
import { addProductSchema } from "./schema";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/product/product.actions";
import { Alert } from "@material-ui/lab";
import { resetData } from "../../redux/product/product.slicer";
import { useNavigate } from "react-router-dom";

const UploadFile = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    login: { userId },
  } = useSelector((state) => state.registerSlice);
  const { isProductAddLoading, isProductAdded } = useSelector(
    (state) => state.Product
  );

  useEffect(() => {
    if (isProductAdded) {
      setTimeout(() => {
        dispatch(resetData());
        navigate(`/myprofile/${userId}`);
      }, 1000);
    }
  }, [dispatch, isProductAdded]);
  const initialValues = {
    title: "",
    description: "",
    rate: "",
    quantity: "",
    userId: userId,
    file: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: addProductSchema,
    onSubmit: (values) => {
      let fd = new FormData();
      fd.append("title", values.title);
      fd.append("description", values.description);
      fd.append("rate", values.rate);
      fd.append("quantity", values.quantity);
      fd.append("userId", userId);
      fd.append("image", values.file);
      console.log(fd.get("image"));
      dispatch(addProduct(fd));
    },
  });
  console.log(formik.values.file);
  return (
    <Box>
      <form onSubmit={formik.handleSubmit} className={classes.mainMint}>
        <Box className={classes.leftMint}>
          <UploadImage
            formik={formik}
            value={formik.values.file}
            helperText={(formik.touched.file && formik.errors.file) || `&nbsp`}
            error={formik.touched.file && Boolean(formik.errors.file)}
          />
        </Box>

        <Box className={classes.rightMint}>
          <Box className={classes.title}>
            <Typography variant="h2">Upload Items</Typography>
          </Box>
          {isProductAdded && (
            <Alert severity="success" style={{ fontSize: 16 }}>
              Product Added Successfully
            </Alert>
          )}

          <Box className={classes.fields}>
            <FormControl>
              <InputField
                placeholder="Product Name"
                className={classes.tagInput}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="title"
                error={formik.touched.title && Boolean(formik.errors.title)}
              />
              {formik.touched.title && (
                <FormHelperText error={true} className={classes.helper}>
                  {formik.errors.title}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl>
              {" "}
              <InputField
                placeholder="Rate"
                className={classes.tagInput}
                type="number"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="rate"
                helperText={formik.touched.rate && formik.errors.rate}
                error={formik.touched.rate && Boolean(formik.errors.rate)}
              />
              {formik.touched.rate && (
                <FormHelperText error={true} className={classes.helper}>
                  {formik.errors.rate}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl>
              <InputField
                placeholder="Quantity(KG)"
                className={classes.tagInput}
                // label="Limit"
                type="number"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.quantity && Boolean(formik.errors.quantity)
                }
                name="quantity"
              />
              {formik.touched.quantity && (
                <FormHelperText error={true} className={classes.helper}>
                  {formik.errors.quantity}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl>
              <InputField
                placeholder=" Write Description "
                rows={8}
                multiline
                className={classes.forArea}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="description"
              />
              {formik.touched.description && (
                <FormHelperText error={true} className={classes.helper}>
                  {formik.errors.description}
                </FormHelperText>
              )}
            </FormControl>
          </Box>

          <Box className={classes.btns}>
            <Box>
              <Button
                variant="contained"
                type="submit"
                className={classes.connectButton}
              >
                {isProductAddLoading ? <CircularProgress /> : "Save Data"}
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default UploadFile;

const useStyle = makeStyles((theme) => ({
  fields: {
    marginTop: 5,
    display: "flex",
    flexDirection: " column",
    gap: 10,
  },

  connectButton: {
    color: "black",
    fontSize: "14px",
    fontWeight: 600,
    border: "none",
    height: 60,
    backgroundColor: "#1BA665",
    "&:hover": {
      backgroundColor: "#1BA665",
    },
  },
  mainMint: {
    margin: 50,
    height: "fitContent",
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: "1fr 1fr",
    paddingBottom: "20px",
    gap: 90,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gap: 0,
    },
  },
  leftMint: {
    display: "flex",
    justifyContent: "center",

    marginTop: 50,
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
      height: 425.81,
      paddingLeft: 0,
    },
  },
  rightMint: {
    display: "flex",
    // justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    paddingTop: 10,
  },
  mintheading: {
    fontSize: "8vw",
    letterSpacing: "1.6px",
  },

  spnitem: {
    marginLeft: "10px",
  },
  underinpt: {
    color: "#FFFFFF",
    borderBottom: " solid #17D7F5",
    fontSize: "18.96px",
    "&.Mui-underline:after": {
      borderBottom: "none",
    },
  },
  agremntOverall: {
    lineHeight: "39px",
    fontWeight: "500",
    fontSize: "19.31px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  agremnttypo: {
    display: "flex",
    flexDirection: "row",
  },
  subagremnttypo: {
    color: "#FFFFFF",
    display: "flex",

    alignItems: "center",
  },
  agremntterms: {
    display: "flex",
    alignItems: "center",
    marginLeft: "5px",
    color: "#17D7F5",
  },

  forArea: {
    color: "black",
    border: "3px solid #1BA665",
    padding: "10px 10px",
    "&:hover": {
      border: "3px solid #1BA665",
    },
  },

  two: {
    display: "flex",
    paddingTop: "18px",
  },
  linkStyle: {
    textDecoration: "none",
    color: "#17D7F5",
  },
  roundBox: {
    paddingTop: "30px",
  },

  tagInput: {
    fontFamily: "Poppins",
    color: "black",
    border: "3px solid #1BA665",
    // borderRadius: "15px !important",

    padding: "8px 10px",
    "&:hover": {
      border: "3px solid #1BA665 !important",
    },
  },
  typopara: {
    paddingTop: "35px",
  },
  btns: {
    display: "grid",
    gridTemplateColumns: "1fr",
    paddingTop: "25px",
    gap: 25,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      gap: 10,
    },
  },
  pdingCount: {
    color: "black",
    paddingTop: "5px",
  },
  title: {
    marginTop: 50,
  },
  helper: {
    fontSize: "12px",
  },
}));
