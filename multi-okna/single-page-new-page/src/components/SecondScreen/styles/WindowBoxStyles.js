import sizes from "../../../styles/BreakPoints";
import colors from "../../../styles/Colors";
import fonts from "../../../styles/Fonts";

export default {
  root: {
    [sizes.down("sm")]: {
      marginTop: "15%",
      width: "100% !important",
    },
    fontWeight: "100",
    marginTop: "2%",
    backgroundColor: colors.colorSecondaryLightTransparent,
    backgroundColor: "white",
  },
  cardContent: {
    [sizes.down("sm")]: {
      padding: "10px 0 0 0",
    },
    width: "50% !important",
    height: "100%",
    padding: "40px 0 0 0 ",
  },
  cardArea: {
    [sizes.down("sm")]: {
      padding: "0",
    },
    display: "flex",
    padding: "10px",
  },
  cardAreaBottom: {
    [sizes.down("sm")]: {
      padding: "0",
      margin: "10px",
      height: "35vh",
    },
    height: "45vh",
    display: "flex",
    flexDirection: "row",
    padding: "0",
  },
  mediaTop: {
    [sizes.down("sm")]: {
      width: "30%",
      marginLeft: "0",
    },
    [sizes.down("md")]: {
      width: "20%",
      marginLeft: "5%",
    },
    width: "15%",
    marginLeft: "5%",
  },
  media: {
    [sizes.down("sm")]: {
      width: "40% !important",
      padding: "0 !important",
      margin: "0 1px 0 0 !important",
    },
    [sizes.down("md")]: {
      width: "35%",
    },
    padding: ".5rem",
    width: "28%",
  },
  mediaLogo: {
    [sizes.down("sm")]: {
      width: "50% !important",
      marginLeft: "0 !important",
      padding: "5px",
    },
    [sizes.down("md")]: {
      width: "30%",
      marginLeft: "6rem",
    },
    width: "20%",
    marginLeft: "8rem",
  },
  title: {
    [sizes.down("sm")]: {
      marginLeft: "5px !important",
      padding: "0 !important",
      textTransform: "uppercase",
      fontSize: ".8rem !important",
      fontWeight: "100",
      letterSpacing: ".5rem",
      lineHeight: "1.5",
    },
    [sizes.down("md")]: {
      padding: ".6rem 4rem",
      fontSize: "1.2rem",
      fontWeight: "700",
      letterSpacing: ".4rem",
      marginLeft: "2rem",
      lineHeight: "1.4rem",
    },
    marginLeft: "3rem",
    padding: ".5rem 5rem",
    fontFamily: fonts.fontMain,
    color: colors.colorPrimaryDark,
    textTransform: "uppercase",
    fontSize: "1.8rem",
    fontWeight: "100",
    letterSpacing: ".5rem",
    lineHeight: "1.5",
  },
  desc: {
    [sizes.down("sm")]: {
      fontSize: "12px !important",
      width: "60% !important",
      marginLeft: "0 !important",
      padding: "10px !important",
      lineHeight: "15px",
    },
    [sizes.down("md")]: {
      marginLeft: "6rem",
      width: "50%",
    },
    width: "60%",
    marginLeft: "7.5rem",
    padding: ".5rem",
    fontFamily: fonts.fontMain,
    color: colors.colorPrimaryDark,
    fontSize: "1.2rem",
    fontWeight: "100",
    lineHeight: "28px",
    textShadow: `0 0 1px ${colors.colorSecondaryDark}`,
  },
  descTop: {
    [sizes.down("sm")]: {
      fontSize: ".8rem",
      width: "90%",
      marginLeft: "0",
      padding: "15px",
    },
    width: "60%",
    marginLeft: "3rem",
    fontFamily: fonts.fontMain,
    color: colors.colorPrimaryDark,
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "1.5",
    textShadow: `0 0 1px ${colors.colorSecondaryDark}`,
    padding: "5px",
  },
};
