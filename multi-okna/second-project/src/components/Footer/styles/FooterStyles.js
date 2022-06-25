import sizes from "../../../root-styles/BreakPoints";
import colors from "../../../root-styles/Colors";
import fonts from "../../../root-styles/Fonts";

export default {
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "2.8rem",
    height: "10%",

    [sizes.down("sm")]: {
      flexDirection: "column",
    },
  },
  contactIcon: {
    zIndex: "1",
    position: "inherit",
    width: "5rem",
    fontSize: "50px",
    margin: "5px",
  },
  footerParagraph: {
    display: "flex",
    padding: "5.5rem 1.5rem 0 1.5rem",
    flex: "1",

    [sizes.down("sm")]: {
      padding: "1rem 1rem 0 1rem",
    },
  },
  socialMediaContainer: {
    borderTop: "1px solid black",
    borderLeft: "1px solid black",
    display: "flex",
    flex: "1",
    height: "250px",
    flexDirection: "column",

    [sizes.down("sm")]: {
      height: "200px",
    },
  },
  socialMediaParagraph: {
    fontSize: "1.2rem",
    textAlign: "center",
    height: "100px",

    [sizes.down("sm")]: {
      height: "66px",
    },
  },
  iconContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "250px",

    [sizes.down("sm")]: {
      padding: ".8rem",
      height: "10px",
    },
  },
  fbIcon: {
    position: "absolute",
    cursor: "pointer",
    top: "40%",
    left: "40%",
    transform: "translate(40%, -80%)",
    height: "60px",
    width: "60px",
    backgroundColor: "black",
    borderRadius: "50%",
    color: "white",
    transition: ".3s",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  rights: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    fontSize: ".8rem",
    padding: "2px",
  },
};
