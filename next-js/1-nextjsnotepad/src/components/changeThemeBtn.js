//redux
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, changeTheme } from "../slices/themeSlice";
import { MoonIcon } from "@heroicons/react/solid";
//styles
import styles from "../styles/themeBtnStyles";
import { withStyles } from "@mui/styles";

function changeThemeBtn({ classes }) {
  //redux
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const switchTheme = () => {
    theme === "white"
      ? dispatch(changeTheme("black"))
      : dispatch(changeTheme("white"));
  };
  const dotStyles = {
    left: theme === "white" ? "25%" : "75%",
  };
  const iconStyles = {
    color: `${theme}`,
    padding: "3px",
    transform: theme === "white" ? "rotate(5deg)" : "rotate(55deg)",
    transition: ".4s",
  };

  return (
    <div className={classes.root}>
      <h1>{theme}</h1>
      <div className={classes.slider}>
        <div onClick={switchTheme} className={classes.dot} style={dotStyles}>
          <MoonIcon style={iconStyles} />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(changeThemeBtn);
