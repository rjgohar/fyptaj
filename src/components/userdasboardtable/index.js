import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import pic from "../../assets/pic.png";

import BasicTable from "../table";
import Buttons from "../buttons";
const columns = ["id", " Name", "image", " bio", "Action"];

const clients = ["1", "ronny ", { type: "img", src: pic }, "sada haq"];
const rows = [clients, clients, clients];

const ProductDashboardTable = () => {
  const classes = useStyles();
  const head = columns.map((col, id) => (
    <TableCell key={id} className={classes.col}>
      {col}
    </TableCell>
  ));

  const body = rows.map((row, id) => (
    <TableRow key={id}>
      {row.map((col) =>
        col.type ? (
          <TableCell className={classes.col}>
            <img src={`${col.src}`} className={classes.image} />
          </TableCell>
        ) : (
          <TableCell className={classes.col}>{col}</TableCell>
        )
      )}
      <TableCell>
        <Buttons className={classes.btnview} variant="outlined">
          view{" "}
        </Buttons>{" "}
        <Buttons variant="outlined">delete</Buttons>
      </TableCell>
    </TableRow>
  ));
  return <BasicTable tableName=" Product's" head={head} body={body} />;
};
export default ProductDashboardTable;
const useStyles = makeStyles((theme) => ({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textcell: {
    color: theme.palette.text.secondary,
  },
  col: {
    fontSize: 18,
    color: theme.palette.text.primary,
  },
  btnview: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
    },
  },
}));
