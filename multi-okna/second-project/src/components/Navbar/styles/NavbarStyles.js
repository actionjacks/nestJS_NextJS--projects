import sizes from "../../../root-styles/BreakPoints";
import colors from "../../../root-styles/Colors";
import fonts from "../../../root-styles/Fonts";

export default {
  root: {
    zIndex: "99",
    position: "fixed",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  menuContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    background: "transparent",
    height: "4.5rem",
    transition: ".6s",
  },
  menuContainerScrolled: {
    display: "flex",
    flexDirection: "row-reverse",
    backgroundColor: colors.secondDark,
    height: "2.5rem",
    transition: ".6s",

    [sizes.down("sm")]: {
      display: "none",
    },
  },
  menu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    "& li:hover": {
      backgroundColor: colors.thirdDark,
      color: colors.mainWhite,
    },
  },
  logoContainer: {
    padding: "1px",
    height: "100%",
    objectFit: "cover",
    marginTop: "10px",
    marginRight: "5px",
  },
  menuLink: {
    padding: "10px 22px",
    listStyleType: "none",
    transition: ".3s",
    "& a": {
      fontSize: "1rem",
      fontWeight: "700",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: ".2s",
      textDecoration: "none",
      fontFamily: fonts.mainFont,
      color: colors.mainBlue,
    },
  },
  menuContainerMobile: {
    zIndex: "99",
    position: "fixed",
    top: "8%",
    left: "-205px",
    display: "flex",
    flexDirection: "row-reverse",
    padding: "0.5rem",
    background: colors.mainWhite,
    boxShadow: `rgba(0, 0, 0, 0.15)  2.4px 2.4px 3.2px`,
    transition: ".5s",
  },
  mobileOpened: { left: "0" },
  menuMobile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    textDecoration: "none",
    "& li:hover": {
      backgroundColor: colors.thirdDark,
      color: colors.mainWhite,
    },
  },
  menuLinkMobile: {
    padding: "10px 30px 10px 10px",
    listStyleType: "none",
    transition: ".3s",
    "& a": {
      fontSize: ".8rem",
      fontWeight: "700",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: ".2s",
      textDecoration: "none",
      fontFamily: fonts.mainFont,
      color: colors.mainBlue,
    },
  },
};
