import sizes from "../../../styles/BreakPoints";
import colors from "../../../styles/Colors";
import fonts from "../../../styles/Fonts";

export default {
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: colors.colorSecondaryLight,
  },
  tabs: {
    height: "100%",
    width: "100% !important",
    display: "flex",
    flexGrow: 1,
  },
  tab: {
    [sizes.down("sm")]: {
      fontSize: "10px",
      padding: "0 5px",
    },
    fontFamily: fonts.fontMain,
    color: colors.colorPrimaryDarkTransparent,
    textTransform: "uppercase",
    fontSize: "13px",
    fontWeight: "700",
  },
  tabPanel: {
    width: "70% !important",
  },
};
