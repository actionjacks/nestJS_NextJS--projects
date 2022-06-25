import GoogleMap from "../../components/GoogleMap";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ContactStyles";

function Contact({ classes }) {
  return (
    <div className={classes.root}>
      <GoogleMap />
    </div>
  );
}

export default withStyles(styles)(Contact);
