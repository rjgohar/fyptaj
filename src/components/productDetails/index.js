import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Divider from "@material-ui/core/Divider";
import Select from "../select";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../redux/product/product.actions";
import BidPopup from "../bidPopup";
import Buttons from "../buttons";
export default function ProductDetails() {
  const classes = useStyles();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    singleProductData: {
      productTitle,
      productDescription,
      rate,
      quantity,
      username,
      status,
      userId,
      productId,
      image,
    },
  } = useSelector((state) => state.Product);
  const handleModalClose = () => setOpen(false);
  const handleModalOpen = () => setOpen(true);
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);
  console.log(userId, productId);
  return (
    <div className={classes.productDetails}>
      <BidPopup
        userId={userId}
        productId={productId}
        open={open}
        price={rate}
        quantity={quantity}
        handleClose={handleModalClose}
      />

      <Box>
        <img
          className={classes.productimage}
          src={`http://localhost:8000/static/${image}`}
          alt="iane"
        />
      </Box>
      <Box className={classes.productdata}>
        <div>
          <Typography variant="h2">{productTitle}</Typography>
        </div>
        <Divider className={classes.hrtag} />
        <div>
          <Typography variant="body1"> Seller: {username}</Typography>
        </div>
        <Divider className={classes.hrtag} />
        <div>
          <Typography variant="body1"> {productDescription}</Typography>
        </div>
        <Divider className={classes.hrtag} />
      </Box>
      <Box>
        <Box className={classes.endSection}>
          <div className="inner">
            {" "}
            <Typography className="typo" variant="body1">
              price:
            </Typography>
            <Typography variant="h4">Rs.&nbsp;{rate}</Typography>
          </div>
          <div className="inner">
            {" "}
            <Typography className="typo" variant="body1">
              Status:
            </Typography>
            <Typography variant="body1">
              {status === 1 ? "In Stock" : "Out of Stock"}
            </Typography>
          </div>
          <div className="inner">
            {" "}
            <Typography className="typo" variant="body1">
              Quantity:
            </Typography>
            <Typography variant="body1">{quantity}&nbsp;KG</Typography>
          </div>
          <Box display={"flex"} justifyContent="center">
            <Buttons onClick={handleModalOpen} variant="contained">
              Place Bid
            </Buttons>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  productDetails: {
    border: "2px solid" + theme.palette.background.border,
    marginTop: 160,
    width: "80%",
    margin: "0 auto",
    marginBottom: 60,
    color: theme.palette.text.secondary,
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      gap: 60,

      gridTemplateColumns: "1fr",
      justifyContent: "center",
      alignItems: "center",
      width: "95%",
    },
  },
  productdata: {
    justifyContent: "center",

    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },

  productimage: {
    width: 400,
    height: 500,
    [theme.breakpoints.down("sm")]: {
      display: "block",
      margin: "auto",
      width: 300,
    },
  },
  hrtag: {
    width: 390,
    height: 1,
    background: theme.palette.background.alpha,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },

  endSection: {
    width: 300,
    marginTop: 120,
    marginBottom: 120,
    margin: "auto",
    height: 200,
    border: " 2px solid" + theme.palette.background.bg,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
    gap: 10,

    "& .inner": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
}));
