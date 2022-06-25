import React from "react";

import HomeWorkIcon from "@material-ui/icons/HomeWork";
import { withStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import styles from "./styles/FooterStyles";

function Footer({ classes }) {
  return (
    <footer id="-footer" className={classes.root}>
      <address className={classes.footerParagraph}>
        <HomeWorkIcon className={classes.contactIcon} />
        Multi-Okna
        <br />
        Polna 4 lok. 15,
        <br />
        16-010 Wasilków
        <br />
        Telefon: +(48) 573 156 154
      </address>
      <div className={classes.socialMediaContainer}>
        <span className={classes.socialMediaParagraph}>Odwiedź nas</span>
        <div className={classes.iconContainer}>
          <a href="https://www.facebook.com/Multi-Styl-Wasilk%C3%B3w-112286500501916/">
            <FacebookIcon className={classes.fbIcon} />
          </a>
        </div>
        <span className={classes.rights}>
          realizacja_actionjacks22@gmail.com
        </span>
      </div>
    </footer>
  );
}

export default withStyles(styles)(Footer);
