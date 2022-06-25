import sizes from "../../../root-styles/BreakPoints";
import colors from "../../../root-styles/Colors";
import fonts from "../../../root-styles/Fonts";

export default {
  contactContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    padding: "5px 0 6px 0",
    backgroundColor: colors.mainDark,

    "& a:hover": {
      color: colors.mainBlue,
    },
  },
  contactLink: {
    marginRight: "1rem",
    cursor: "pointer",
    fontFamily: fonts.mainFont,
    fontSize: "12px",
    color: colors.mainWhite,
    textDecoration: "none",
    transition: ".5s",
  },
};
