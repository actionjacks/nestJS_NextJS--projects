import sizes from "../../styles/BreakPoints";
import color from "../../styles/Colors";

export default {
  root: {
    boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
    display: "flex",
    flexDirection: "column",
    padding: "40px",
    position: "relative",
    background: "rgb(235,235,235)",
    background:
      "linear-gradient(0deg, rgba(235,235,235,1) 0%, rgba(255,255,255,1) 50%)",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
  icon: {
    color: color.secondColor,
    borderRadius: "5px",
    marginRight: "15px",
    fontSize: "3rem",
    transition: ".3s",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    "&:hover": {
      boxShadow:
        "rgba(0, 0, 0, 0.19) 0px 1px 5px, rgba(0, 0, 0, 0.23) 0px 1px 1px",
      color: color.mainColor,
    },
  },
  upIcon: {
    color: color.secondColor,
    fontSize: "3.5rem",
    cursor: "pointer",
    position: "absolute",
    bottom: "20px",
    right: "50%",
    borderRadius: "5px",
    transition: ".3s",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    "&:hover": {
      boxShadow:
        "rgba(0, 0, 0, 0.19) 0px 1px 5px, rgba(0, 0, 0, 0.23) 0px 1px 1px",
      color: color.mainColor,
    },
  },
  contactContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    [sizes.down("md")]: {
      flexDirection: "column",
    },
  },
  footerLink: {
    height: "1rem",
    padding: "10px 15px",
    marginLeft: "5px",
    borderRadius: "5px",
    textDecoration: "none",
    color: "black",
    fontWeight: "700",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    "&:hover": {
      boxShadow:
        "rgba(0, 0, 0, 0.19) 0px 1px 5px, rgba(0, 0, 0, 0.23) 0px 1px 1px",
      color: color.mainColor,
    },

    [sizes.down("md")]: {
      width: "45%",
      marginBottom: "10px",
    },
  },
  credits: {
    fontSize: "1rem",
    display: "flex",
    flexDirection: "row",
    width: "20%",
    borderBottom: "1px solid black",
    justifyContent: "flex-end",
    marginLeft: "80%",
  },
};
