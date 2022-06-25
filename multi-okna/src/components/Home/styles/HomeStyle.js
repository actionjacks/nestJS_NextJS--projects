import sizes from "../../../styles/BreakPoints";
import color from "../../../styles/Colors";
import imageBackground from "./assets/bg-window-transparent.png";

export default {
  home: {
    backgroundImage: `url(${imageBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundSize: "20%",
  },
  topHeader: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: " 25px",
    width: "50%",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",

    "& h1": {
      textAlign: "center",
      fontWeight: "normal",
      lineHeight: "27px",
    },
  },
  products: {
    display: "flex",
    backgroundColor: "gray",
    padding: "5px",

    [sizes.down("md")]: {
      display: "block",
      padding: "10px",
    },
  },
  productLeft: {
    display: "flex",
    flex: 1,
    width: "100%",

    [sizes.down("md")]: {
      width: "80%",
      margin: "auto",
    },
  },
  productRight: {
    display: "flex",
    flexWrap: "wrap",
    flex: 0.8,
    width: "100%",
    justifyContent: "space-between",

    [sizes.down("md")]: {
      width: "80%",
      margin: "auto",
    },
  },
  bottomHeader: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: " 35px",
    width: "90%",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",

    "& h2": {
      textAlign: "center",
      fontWeight: "normal",
      lineHeight: "27px",
      background: "white",
    },
  },
  bottomHeaderText: {
    fontSize: "15px",
    lineHeight: "22px",
    background: "white",
  },
  bottomBtn: {
    color: color.secondColor,
    display: "block",
    borderRadius: "5px",
    marginRight: "15px",
    fontSize: "1.5rem",
    width: "35%",
    padding: "15px 10px",
    marginLeft: "auto",
    marginRight: "auto",
    cursor: "pointer",
    textDecoration: "none",
    background: "white",
    transition: ".3s",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    "&:hover": {
      boxShadow:
        "rgba(0, 0, 0, 0.19) 0px 1px 5px, rgba(0, 0, 0, 0.23) 0px 1px 1px",
      color: color.mainColor,
    },
  },
};
