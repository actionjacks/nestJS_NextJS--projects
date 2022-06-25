import sizes from "../../../root-styles/BreakPoints";
import colors from "../../../root-styles/Colors";
import fonts from "../../../root-styles/Fonts";

export default {
  root: {
    overflow: "hidden",
    display: "flex",

    [sizes.down("sm")]: {},
  },
  BoxContainer: {
    padding: "0 10px",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
};
