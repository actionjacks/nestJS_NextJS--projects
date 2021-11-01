import sizes from "./breakPoints";

const styles = (theme) => ({
  root: {
    height: "100vh",
    border: "1px solid gray",
  },
  whiteTheme: {
    backgroundColor: "white",
    color: "black",
    transition: ".4s",
  },
  darkTheme: {
    backgroundColor: "black",
    color: "white",
    transition: ".4s",
  },
});
export default styles;
