import React from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles/gateStyles";

function Gate() {
  return (
    <div>
      <p>BRAMY!!</p>
    </div>
  );
}

export default withStyles(styles)(Gate);
