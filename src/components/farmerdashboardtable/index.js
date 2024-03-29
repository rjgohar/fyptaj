import React, { useEffect } from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import BasicTable from "../table";
import Buttons from "../buttons";
import { useDispatch, useSelector } from "react-redux";
import { deleteuser, getAllUsers } from "../../redux/users/users.actions";
const columns = ["id", " Name", "image", " bio", "Action"];

const FarmeraDashboardTable = () => {
  const dispatch = useDispatch();
  const { farmers } = useSelector((state) => state.Users);
  const classes = useStyles();

  // Api Call
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const handleuserDelete = (userId) => {
    dispatch(deleteuser(userId));
  };
  const head = columns.map((col, id) => (
    <TableCell key={id} className={classes.col}>
      {col}
    </TableCell>
  ));

  const body = farmers.map(({ userId, username, image, description }, id) => (
    <TableRow key={id}>
      <TableCell className={classes.col}>{userId}</TableCell>
      <TableCell className={classes.col}>{username}</TableCell>
      <TableCell className={classes.col}>
        <img
          alt="img"
          src={`http://localhost:8000/static/${image}`}
          className={classes.image}
        />
      </TableCell>
      <TableCell className={classes.col}>{description}</TableCell>
      <TableCell>
        <Buttons className={classes.btnview} variant="outlined">
          view{" "}
        </Buttons>{" "}
        <Buttons
          variant="outlined"
          onClick={() => {
            handleuserDelete(userId);
          }}
        >
          delete
        </Buttons>
      </TableCell>
    </TableRow>
  ));
  return <BasicTable tableName=" Farmer's" head={head} body={body} />;
};
export default FarmeraDashboardTable;
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
