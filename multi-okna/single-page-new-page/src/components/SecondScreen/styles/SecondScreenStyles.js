import sizes from "../../../styles/BreakPoints";
import colors from "../../../styles/Colors";
import fonts from "../../../styles/Fonts";

export default {
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: colors.colorSecondaryLight,
  },
  paper: {
    [sizes.down("sm")]: {
      padding: "0 !important",
    },
    padding: ".5rem",
  },
  tabs: {
    fontFamily: fonts.fontMain,
    color: colors.colorPrimaryDarkTransparent,
    textTransform: "uppercase",
    fontSize: "13px",
    fontWeight: "100",
    letterSpacing: "0.03em",
    lineHeight: "26px",
    fontWeight: "bold",
    boxShadow: `inset 1px 0 0 0 ${colors.colorPrimaryDarkTransparent}`,
    backgroundColor: "transparent",
    transition: ".3s",
  },
};
