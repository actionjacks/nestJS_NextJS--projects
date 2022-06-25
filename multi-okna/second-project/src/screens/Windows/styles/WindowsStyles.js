import sizes from "../../../root-styles/BreakPoints";
import colors from "../../../root-styles/Colors";
import fonts from "../../../root-styles/Fonts";

export default {
  root: {
    padding: "5.5rem 2.5rem 0 2.5rem",
    [sizes.down("sm")]: {
      padding: "5.5rem 1rem",
    },
  },
  topContainer: {
    background:
      "linear-gradient(0deg, rgba(89,177,191,0.2) 0%, rgba(255,255,255,1) 62%)",
    overflow: "hidden",
    marginTop: "1rem",
    marginBottom: "1rem",
    margin: "auto",
    position: "relative",

    [sizes.down("sm")]: {
      marginBottom: "1.5rem",
    },
  },
  descContainer: {
    zIndex: "1",
    position: "absolute",
    top: "50%",
    left: "10%",
    padding: "2.5rem",
    backgroundColor: colors.mainWhite,
    border: "1px solid #e0e0e0", //todo remove

    [sizes.down("sm")]: {
      left: "0",
      padding: "0.5rem",
    },
  },
  bannerContainer: {},
  windowBoxContainer: {},
};
