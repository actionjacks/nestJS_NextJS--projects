import React from "react";

import { withStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";
import styles from "./styles/CloseIconStyles";

function CloseIcon({ toggleMenu, classes }) {
  return (
    <>
      <CancelIcon className={classes.closeIcon} onClick={toggleMenu} />
    </>
  );
}

export default withStyles(styles)(CloseIcon);
