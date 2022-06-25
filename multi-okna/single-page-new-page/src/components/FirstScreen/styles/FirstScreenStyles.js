import sizes from "../../../styles/BreakPoints";
import colors from "../../../styles/Colors";
import fonts from "../../../styles/Fonts";

export default {
  root: {
    width: "100vw",
    height: "100vh",
    position: "relative",
  },
  heading: {
    backgroundColor: colors.colorSecondaryLightTransparent,
    width: "70%",
    padding: "35px 25px 25px 25px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "2",
  },
  about: {
    textAlign: "center",
    color: colors.colorPrimaryDark,
    textShadow: `1px 1px 1px ${colors.colorPrimaryDark}`,
    letterSpacing: "2px",
    fontWeight: "700",
    fontFamily: fonts.fontMain,
    fontSize: "1.5rem",

    [sizes.down("sm")]: {
      display: "none",
    },
  },
  ourOffer: {
    color: colors.colorPrimaryDark,
    letterSpacing: "2px",
    fontFamily: fonts.fontMain,
    textAlign: "center",
    fontWeight: "700",
    padding: "0 55px",

    [sizes.down("sm")]: {
      textAlign: "left",
      padding: "0 5px",
    },
  },
};
