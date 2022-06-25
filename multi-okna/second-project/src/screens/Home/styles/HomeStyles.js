import sizes from "../../../root-styles/BreakPoints";
import colors from "../../../root-styles/Colors";
import fonts from "../../../root-styles/Fonts";

export default {
  root: {
    overflow: "hidden",
  },
  topHomeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",

    [sizes.down("sm")]: {
      flexDirection: "column",
    },
  },
  leftSite: {
    flex: "1",
    padding: "2.8rem",
  },
  headerTitle: {
    fontFamily: fonts.mainFont,
    color: colors.mainBlue,
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: "5rem",

    [sizes.down("sm")]: {
      fontSize: "3rem",
    },
  },
  smallHeader: {
    fontFamily: fonts.mainFont,
    color: colors.mainDark,
    fontWeight: "400",
    fontSize: "2rem",

    [sizes.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  description: {
    fontFamily: fonts.mainFont,
    color: colors.mainDark,
    fontSize: "1rem",
    fontWeight: "400",
  },
  rightSite: {
    flex: "2",
    zIndex: "-2",
  },
  homeTopBanner: {
    minWidth: "100%",
    width: "100%",
  },
  middleHomeContainer: {
    borderRight: `15px solid ${colors.opacityBlue}`,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    padding: "3.5rem 5rem",
    boxShadow: "rgba(50, 50, 54, 0.15) 0px 5px 15px 0px",

    [sizes.down("sm")]: {
      flexDirection: "column",
      padding: "2.5rem ",
    },
  },
  contactParagraph: {
    fontFamily: fonts.secondFont,
    color: colors.mainWhite,
    marginTop: "15px",
    fontSize: "1.2rem",
    textAlign: "left",
    paddingLeft: "50%",

    [sizes.down("sm")]: {
      fontSize: "1rem",
      paddingLeft: "0",
    },
  },
  contactParagraphSpan: {
    backgroundColor: colors.mainBlue,
    padding: "2px",
  },
  bottomHomeContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomParagraph: {
    marginTop: "1.5rem",
    fontFamily: fonts.secondFont,
    color: colors.mainDark,
    fontWeight: "400",
    fontSize: "2rem",

    [sizes.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  ourBrandsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "1.7rem",

    [sizes.down("sm")]: {
      padding: ".5rem",
    },
  },
};
