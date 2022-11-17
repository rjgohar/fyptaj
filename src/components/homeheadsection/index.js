import { Typography } from "@material-ui/core";

import React from "react";
import useStyles from "./styles";

function Homehead() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.maainabouthead}>
        <Typography className="typoHead" variant="h1">
          We cultivate new crops to make farmers increase profits!
        </Typography>
        <Typography variant="h4" className={classes.aboutLink}>
          '' Agricultural growth is a proven driver of poverty reduction. When
          agriculture stimulates growth ... the growth is twice as effective in
          reducing poverty as growth based in other sectors '' - giza mdoe
        </Typography>
      </div>
    </>
  );
}

export default Homehead;
