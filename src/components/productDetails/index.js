import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Divider from "@material-ui/core/Divider";
import image from "../../assets/basmati_rice.jpg";
import Select from "../select";
export default function ProductDetails() {
  const classes = useStyles();
  return (
    <div className={classes.productDetails}>
      <Box>
        <img className={classes.productimage} src={image} alt="iane" />
      </Box>
      <Box className={classes.productdata}>
        <div>
          <Typography variant="h2">Wheat Sona</Typography>
        </div>
        <Divider className={classes.hrtag} />
        <div>
          <Typography variant="body1"> Seller: Perera</Typography>
        </div>
        <Divider className={classes.hrtag} />
        <div>
          <Typography variant="body1"> Avalaible Location: Moratuwa</Typography>
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
            <Typography variant="h4" style={{ paddingRight: 27 }}>
              price
            </Typography>
          </div>
          <div className="inner">
            {" "}
            <Typography className="typo" variant="body1">
              Status:
            </Typography>
            <Typography variant="body1">In Stock</Typography>
          </div>
          <div className="inner">
            {" "}
            <Typography className="typo" variant="body1">
              Quantity:
            </Typography>
            <Select style={{ marginRight: "27px !important" }} />
          </div>
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

    "& .inner": {
      display: "flex",
      gap: 60,
      padding: "0px 40px",
      justifyContent: "space-between",

      "& .typo": {
        paddingBottom: 10,
      },
    },
  },
}));
