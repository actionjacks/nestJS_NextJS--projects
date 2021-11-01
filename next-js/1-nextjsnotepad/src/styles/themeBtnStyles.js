import sizes from "./breakPoints";

export default {
  root: {
    position: "absolute",
    top: "55px",
    right: "55px",
    width: "45px",
    height: "15px",
    [sizes.down("sm")]: {},
  },
  slider: {
    position: "relative",
    borderRadius: "10px",
    height: "100%",
    width: "100%",
    border: "4px solid #3c1e70",
    backgroundColor: "#271052",
    transition: ".4s",
  },
  dot: {
    position: "absolute",
    top: "50%",
    transform: "translate(-50%,-50%)",
    width: "25px",
    height: "25px",
    backgroundColor: "#6f57a8",
    borderRadius: "50%",
    transition: ".4s",
    cursor: "pointer",
  },
};
