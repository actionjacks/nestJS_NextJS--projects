import sizes from "../../../root-styles/BreakPoints";
import colors from "../../../root-styles/Colors";
import fonts from "../../../root-styles/Fonts";

export default {
  root: {
    overflow: "hidden",
    position: "relative",
    display: "flex",

    [sizes.down("sm")]: {},
  },
  description: {
    padding: "1.5rem 1rem",
    backgroundColor: colors.thirdDark,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "1",
    width: "20%",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",

    [sizes.down("md")]: {
      width: "30%",
    },

    [sizes.down("sm")]: {
      width: "50%",
    },
  },
  paragraph: {
    fontFamily: fonts.mainFont,
    fontSize: "1rem",
    textAlign: "left",
    fontWeight: "400",
    lineHeight: "1.5",
    color: colors.mainWhite,
  },
  doorBoxContainer: {
    padding: "0 10px",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
};
