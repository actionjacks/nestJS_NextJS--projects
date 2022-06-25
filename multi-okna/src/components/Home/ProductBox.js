import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ProductBox";

function ProductBox({ classes, url, name, fullHeight = false }) {
  return (
    <div
      className={`${classes.productBoxContainer} ${
        fullHeight && classes.bigContainer
      }`}
    >
      <Link className={classes.link} to={url}>
        {name}
      </Link>
      <img
        className={fullHeight ? classes.bigImg : classes.smallImg}
        src="https://www.multiokna.pl/data/wysiwyg/okna/okna_multiokna2.png"
        alt=""
      />
    </div>
  );
}

export default withStyles(styles)(ProductBox);
