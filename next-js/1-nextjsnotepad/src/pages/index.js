//redux
import { useSelector } from "react-redux";
import { selectTheme } from "../slices/themeSlice";
//components
import ChangeThemeBtn from "../components/changeThemeBtn";
//styles
import { withStyles } from "@mui/styles";
import styles from "../styles/homeStyles";

function Home({ classes }) {
  //get from redux
  const theme = useSelector(selectTheme);

  return (
    <div
      className={`${classes.root} ${
        theme === "white" ? classes.whiteTheme : classes.darkTheme
      }`}
    >
      <h1>lorem</h1>
      <h2>current theme is data from redux state {theme}</h2>
      <ChangeThemeBtn />
    </div>
  );
}
export default withStyles(styles, { withTheme: true })(Home);
