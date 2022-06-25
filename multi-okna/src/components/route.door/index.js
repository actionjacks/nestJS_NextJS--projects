import React from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles/doorStyles";

function Door() {
  return (
    <div>
      <p>DRZWI!!</p>
    </div>
  );
}

export default withStyles(styles)(Door);
