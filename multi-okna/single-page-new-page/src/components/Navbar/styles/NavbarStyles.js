import sizes from "../../../styles/BreakPoints";
import colors from "../../../styles/Colors";
import fonts from "../../../styles/Fonts";

export default {
  navbarContainer: {
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "99",
    margin: "2.5% 5%",
    width: "70%",
  },
  navbarMobile: {
    [sizes.up("sm")]: {
      display: "none",
      backgroundColor: colors.colorSecondaryLightTransparent,
    },
  },
  navbarDesktop: {
    borderRadius: "15px",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
    backgroundColor: colors.colorSecondaryLightTransparent,
    display: "flex",
    justifyContent: "space-between",
    padding: "0 1.2rem",

    [sizes.down("sm")]: {
      display: "none",
    },
  },
  navbarMobileContent: {
    background: "white",
    display: "flex",
    position: "fixed",
    top: "5%",
    left: "10%",
    flexDirection: "column",
    border: "1px solid red",
  },
  navbarBtn: {
    marginLeft: "10px",
    cursor: "pointer",
    border: "none",
    margin: "10px",
    fontFamily: fonts.fontMain,
    color: colors.colorPrimaryDark,
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
  navbarBtnActive: {
    color: colors.colorSecondaryLight,
    textShadow: `1px 1px 1px ${colors.colorSecondaryDark}`,
  },
};
