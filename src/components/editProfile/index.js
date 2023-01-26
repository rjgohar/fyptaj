import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ImageIcon from "@material-ui/icons/Image";
import img from "../../assets/pic.png";
const EditProfile = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Box>
        <Typography varient="h1" className={classes.heading}>
          Update your personal data
        </Typography>
        <div style={{ height: 300 }}></div>
        <div className={classes.imgBox}>
          <img className="image" src={img} alt="profile" />
          <div className={classes.uploadProfile}>
            <label className={classes.imgLable}>
              <ImageIcon className={classes.icon} />
              <input
                // ref={imageRef}
                // onChange={profileImageUpload}
                type="file"
                className={classes.imgInput}
              />
            </label>
          </div>
        </div>
      </Box>

      <Box className={classes.row}>
        <Box>
          <input type="text" placeHolder="User ID" className={classes.input} />
        </Box>
        <Box>
          <input type="text" placeHolder="CNIC" className={classes.input} />
        </Box>
      </Box>
      <Box className={classes.row}>
        <Box>
          <input type="text" placeHolder="Email" className={classes.input} />
        </Box>
        <Box>
          <input type="text" placeHolder="Location" className={classes.input} />
        </Box>
      </Box>
      <Box className={classes.desc}>
        <Box>
          <textarea
            type="text"
            placeHolder="Description"
            className={classes.descInput}
          />
        </Box>
        <Box className={classes.endsection}>
          <button type="submit" className={classes.submitBtn}>
            Update Now
          </button>
        </Box>
      </Box>
    </Box>
  );
};
export default EditProfile;
const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",

    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  heading: {
    fontSize: "35px",
    color: "#1BA665",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  input: {
    width: "350px",
    height: "40px",
    marginTop: "20px",
    paddingLeft: "12px",
    fontSize: "22px",
    border: "2px solid #1BA665",
    borderRadius: "5px",
    [theme.breakpoints.down("xs")]: {
      width: "280px",
    },
  },

  row: {
    width: "50%",

    display: "flex",
    gap: 10,
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
  },

  desc: {
    width: "50%",
    display: "flex",

    flexDirection: "column",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
  },
  descInput: {
    resize: "none",
    width: "750px",
    height: "250px",
    marginTop: "20px",
    border: "2px solid #1BA665",
    fontSize: "22px",
    [theme.breakpoints.down("md")]: {
      width: "540",
    },
    [theme.breakpoints.down("xs")]: {
      width: "290px",
    },
  },
  submitBtn: {
    width: "100%",
    marginTop: "20px",
    padding: "15px 0px",
    backgroundColor: "#1BA665",
    color: "white",
    border: "none",
    fontSize: "22px",
    borderRadius: "15px",
    [theme.breakpoints.down("sm")]: {
      width: "360px !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "250px",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  endsection: {
    paddingBottom: 69,

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  ////
  imgBox: {
    width: 250,
    height: 250,
    borderRadius: "50%",
    position: "absolute",
    bottom: 190,
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    border: "2px solid #FFFFFF",
    [theme.breakpoints.down("md")]: {
      top: 330,
    },
    [theme.breakpoints.down("sm")]: {},

    "& .image": {
      width: 250,
      height: 250,
      borderRadius: "50%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  },
  uploadProfile: {
    position: "inherit",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "250px",
    height: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease-in",
    opacity: 0,
    "&:hover": {
      opacity: 1,
    },
  },
  icon: {
    fontSize: 82,
    color: "white",
    cursor: "pointer",
  },
  imgInput: {
    display: "none",
  },
}));
