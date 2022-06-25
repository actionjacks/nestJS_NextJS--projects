import sizes from "../../../styles/BreakPoints";
import color from "../../../styles/Colors";

export default {
  root: {
    marginTop: "10vw",
    width: "100vw",
    height: "90vh",
    paddingLeft: "55px",
    backgroundColor: color.colorSecondaryLight,
  },
  tabs: {
    display: "flex",
    flexGrow: 1,
    boxShadow:
      "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset",
  },
  tabPanel: {
    width: "100%",
  },
};
