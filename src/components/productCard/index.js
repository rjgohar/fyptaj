import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { baseURL } from "../../Http/config";
import { List } from "../../redux/userInWallet/inWallet.actions";
import Buttons from "../buttons";
import TextField from "../input";

export default function CardProduct({
  image,
  rate,
  quantity,
  productTitle,
  productId,
  showListingBtn = false,
  isListed,
  userId,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [price, setPrice] = useState(null);
  const [quantityProduct, setQuantity] = useState(null);

  const handleChnagePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleChnageQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handlePutOnAuction = () => {
    const payload = {
      userId,
      productId,
      reservePrice: price,
      quantity: quantityProduct,
    };
    price && quantityProduct && dispatch(List(payload));
  };
  return (
    <Box className={classes.main}>
      <div className={classes.heading}>
        <div>
          <img
            className={classes.image}
            src={`${baseURL}assets/products/${image}`}
            alt="pic"
          />
        </div>
        <Typography variant="h3"> {productTitle}</Typography>
      </div>
      {Boolean(isListed) && (
        <>
          <div className={classes.sectionProduct}>
            <Typography variant="h4">price:</Typography>
            <Typography variant="">RS {rate}</Typography>
          </div>
          <div className={classes.sectionProduct}>
            <Typography variant="h4">Product Size:</Typography>
            <Typography variant="">{quantity} KG</Typography>
          </div>
        </>
      )}

      {Boolean(isListed) && <Typography variant="h2">Listed</Typography>}
      {showListingBtn && Boolean(!isListed) ? (
        <div className={classes.btn}>
          <Box mt="10px">
            <TextField
              name="Price"
              variant="outlined"
              placeholder="Price"
              className={classes.input}
              onChange={handleChnagePrice}
              type="number"
            />
          </Box>
          <Box mt="10px">
            {" "}
            <TextField
              name="Price"
              variant="outlined"
              placeholder="Quantity"
              className={classes.input}
              onChange={handleChnageQuantity}
              type="number"
            />
          </Box>
          <Box mt="10px">
            {" "}
            <Buttons
              className={classes.btnSe}
              variant="contained"
              onClick={handlePutOnAuction}
            >
              Put On Auction
            </Buttons>
          </Box>
        </div>
      ) : (
        <div className={classes.btn}>
          <Link to={`/product/${productId}`}>
            <Buttons className={classes.btnSe} variant="contained">
              {" "}
              preview here{" "}
            </Buttons>
          </Link>
        </div>
      )}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    width: 300,

    borderRadius: "15px",
    textAlign: "center",
    border: "2px solid" + theme.palette.background.border,
  },

  heading: {
    padding: "15px 0px",
    color: theme.palette.text.secondary,
  },
  image: {
    width: 280,
    height: 300,
  },
  description: {
    padding: 10,
    fontSize: 18,
    color: theme.palette.text.secondary,
  },

  btn: {
    padding: " 20px 0px",
  },
  btnSe: {
    borderRadius: "50px",
  },
  sectionProduct: {
    color: theme.palette.text.secondary,
    display: "flex",
    padding: "5px 15px",
    justifyContent: "space-between",
  },
  input: {
    color: "black",
    "& .MuiOutlinedInput-input": { color: "black" },
  },
}));
