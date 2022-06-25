import sizes from "../../../styles/BreakPoints";

export default {
  productBoxContainer: {
    position: "relative",
    display: "flex",
    overflow: "hidden",
    width: "50%",

    [sizes.down("md")]: {
      width: "100%",
    },
  },
  bigContainer: { width: "100%" },
  bigImg: {
    width: "100%",
    height: "100%",
    padding: "5px",

    [sizes.down("md")]: {
      // width: "100%",
    },
  },
  smallImg: {
    width: "100%",
    height: "100%",
    padding: "5px",

    [sizes.down("md")]: {
      // width: "100%",
    },
  },
  link: {
    position: "absolute",
    top: "50%",
    left: "0",
    textDecoration: "none",
    width: "100%",
    textAlign: "center",
    backgroundColor: "gray",
  },
};
