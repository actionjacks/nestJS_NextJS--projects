import React from "react";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ContactTopStyles";

function ContactTop({ classes, contacts }) {
  return (
    <div className={classes.contactContainer}>
      {contacts.map((item, index) => (
        <a
          className={classes.contactLink}
          href={index === 0 ? `mailto:${item}` : `tel:${item}`}
        >
          {item}
        </a>
      ))}
    </div>
  );
}

export default withStyles(styles)(ContactTop);
