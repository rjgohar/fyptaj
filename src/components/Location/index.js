import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import React from "react";
const Location = () => {
  const classes = useStyles();
  return (
    <div className={classes.locationMain}>
      <div>
        <div></div>
      </div>
      <div>
        <iframe
          title="location"
          width="100%"
          height="400"
          frameborder="0"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.4872048040143!2d74.68753591513043!3d36.32474028004923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e8a73580ec8021%3A0xd7e6041fac48a367!2sEagle&#39;s%20Nest%20Hotel!5e0!3m2!1sen!2s!4v1647351397741!5m2!1sen!2s"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
