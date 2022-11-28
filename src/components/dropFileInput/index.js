import React from "react";
import { FileUploader } from "react-drag-drop-files";
import PublishIcon from "@material-ui/icons/Publish";

import { makeStyles } from "@material-ui/core";
const UploadImage = React.forwardRef(
  ({ handleImageUploadComplete, helperText, error, value }, ref) => {
    const classes = useStyles();
    const [isImgUploading, setIsImgUploading] = React.useState(false);
    const [isInvalidFile, setIsInvalidFile] = React.useState(false);
    const handleFileUpload = (file) => {
      setIsInvalidFile(null);
      setIsImgUploading(true);
      // check for file
      if (
        !file ||
        !/\.(jpg|jpeg|png|gif|tiff|tif|heif|heic|svg|svgz|ai|mp4|ogg|webm|mov)$/.test(
          file.name.toLowerCase()
        )
      ) {
        setIsInvalidFile("Only image and video NFTs are allowed.");
        setIsImgUploading(false);
        return false;
      }
      setIsImgUploading(false);
      handleImageUploadComplete(file);
      const res = URL.createObjectURL(file);
      ref.current.poster = res;
      ref.current.src = res;
    };
    return (
      <div className={classes.leftleft}>
        <div className={classes.label1}>
          <FileUploader
            classes="drag_n_drop"
            handleChange={handleFileUpload}
            name="imageFile"
            type="file"
          >
            <div className={classes.innerLabel}>
              <PublishIcon
                style={{ fontSize: "90px" }}
                className={classes.uploadicon}
              />
              <p className={classes.drag}>
                Drag and drop or Choose file to upload
              </p>
            </div>
          </FileUploader>
        </div>
        <div className={classes.mainLabel}>
          {(error || isInvalidFile) && (
            <p className={classes.error}>{isInvalidFile || helperText}</p>
          )}
        </div>
      </div>
    );
  }
);
export default UploadImage;

const useStyles = makeStyles((theme) => ({
  leftleft: {
    display: "flex",
    border: "2px solid black",
    justifyContent: "center",
    alignItems: "center",
    width: 500,
    height: 400,
    [theme.breakpoints.down("sm")]: {
      border: "1.16502px solid black",
    },
  },

  mainLabel: {
    fontFamily: "Poppins, sans-serif",
  },

  innerLabel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontFamily: "Poppins,sans-serif",
    color: "black",
    fontSize: "30px",
    "& p": {
      fontSize: "12px",
    },
  },
  upload: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  drag: {
    fontSize: "19.68px",
    color: " black",
    fontFamily: "poppins",
    fontWeight: "",
  },
  uploadicon: {
    color: "black",
  },
  error: {
    fontSize: 14,
    color: "#F44336",
  },
}));
