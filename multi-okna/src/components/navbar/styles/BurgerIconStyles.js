import sizes from "../../../styles/BreakPoints";

export default {
  menuBtn: {
    zIndex: "1110",
    position: "fixed",
    top: "45px",
    right: "25px",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
    transition: "0.5s ease",
    height: "50px",
    width: "35px",
    userSelect: "none",

    [sizes.up("md")]: {
      display: "none",
    },

    "&:hover .bar": {
      boxShadow: "1px 1px 7px 1px RGBa(0, 0, 0, 0.3)",
    },
  },
  barDiv: {
    width: "45px",
    height: "10px",
    /* bars color */
    // background: "rgb(14, 14, 14)",
    boxShadow: "1px 1px 3px RGBa(0, 0, 0, 0.4)",
    borderRadius: "2px",
    transition: "0.4s ease",

    "&:not(:first-child)": {
      marginTop: "10px",
    },
  },
};
