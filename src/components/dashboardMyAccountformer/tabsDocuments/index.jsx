import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";

import clsx from "clsx";
import ProfileFormer from "../../profileformer";
import ProductsMap from "../../productCard/productMap";
import InWalletProducts from "../../inWalletProducts/productMap";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  console.log(value, "valueeee");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Box className={classes.innerTabs}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab
            label="profile"
            class={clsx({
              [classes.forTabs]: true,
              [classes.selected]: value === 0,
            })}
          />
          <Tab
            class={clsx({
              [classes.forTabs]: true,
              [classes.selected]: value === 1,
            })}
            label="edit profile"
          />
          <Tab
            class={clsx({
              [classes.forTabs]: true,
              [classes.selected]: value === 2,
            })}
            label="Created Products"
          />
        </Tabs>
      </Box>

      <Box className={classes.datasec}>
        <TabPanel value={value} index={0} className={classes.panelContainer}>
          <ProfileFormer />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>
            <ProductsMap />
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <InWalletProducts />
        </TabPanel>
      </Box>
    </div>
  );
}

export default VerticalTabs;

const useStyles = makeStyles((theme) => ({
  datasec: {
    marginTop: 30,
  },
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    paddingTop: 40,
    gap: "10px",
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
    },
  },
  innerTabs: {
    display: "flex",

    [theme.breakpoints.down("xs")]: {
      paddingLeft: 20,
    },
  },
  forTabs: {
    width: 160,
    height: 60,
    backgroundColor: "#fff",
    border: "1px solid " + theme.palette.text.secondary,
    margin: "10px",

    borderRadius: 5,
    textTransform: "capitalize",
    "& .MuiTab-wrapper": {
      fontWeight: "bold",
    },
  },
  selected: {
    background: theme.palette.background.main,
    color: theme.palette.secondary.main,
    fontSize: 14,
  },
  tabs: {
    display: "flex",
    marginTop: "6rem",
    width: "100%",
    fontSize: 20,
    " & .MuiTabs-flexContainerVertical": {
      display: "flex",

      flexDirection: "row",
      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap",
      },
    },

    "& .MuiTab-wrapper": {
      fontSize: 16,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
  panelContainer: {
    width: "100%",
  },
}));
