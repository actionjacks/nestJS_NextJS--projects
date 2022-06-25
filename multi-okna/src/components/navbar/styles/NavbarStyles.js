import sizes from "../../../styles/BreakPoints";

export default {
  root: {},
  active: {
    marginBottom: "15px",
    boxShadow:
      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
  },
  navContainer: {
    zIndex: "999",
    paddingTop: "10px",
    display: "flex",
    position: "fixed",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "90px",
    overflow: "hidden",
    transition: "height 0.3s 0s ease-in-out",
    display: "flex",
    backgroundColor: "white",

    [sizes.down("md")]: {
      display: "none",
    },
  },
  navActive: {
    height: "59px",
  },
  left: {
    display: "flex",
    flex: "1",
    padding: "15px",
    margin: "0 25px",
    justifyContent: "space-between",
    "& a": {
      fontSize: "18px",
      color: "rgb(110, 162, 194)",
      fontWeight: "600",
      transition: "0.3s 0s ease-in-out",
      padding: "5px 15px",
      "&:hover": {
        color: "rgb(7, 99, 133)",
      },
    },
  },
  logo: {
    marginTop: "5px",
    flex: "2",
    height: "75px",
    objectFit: "contain",
    transition: "0.3s 0s ease-in",
  },
  logoActive: { marginTop: "25px", height: "70px" },
  right: {
    display: "flex",
    flex: "1",
    padding: "15px",
    margin: "0 25px",
    justifyContent: "space-between",
    "& a": {
      fontSize: "18px",
      color: "rgb(110, 162, 194)",
      fontWeight: "600",
      transition: "0.3s 0s ease-in-out",
      padding: "5px 15px",
      "&:hover": {
        color: "rgb(7, 99, 133)",
      },
    },
  },
  navItem: {
    textDecoration: "none",
  },
};
