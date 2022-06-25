import React, { useState, useEffect } from "react";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import { connect } from "react-redux";
import { changeTheme } from "./../actions";

function ThemeSwitcher({ theme, changeTheme }) {
  const [themeColor, setThemeColor] = useState(theme);
  useEffect(() => {
    setThemeColor(theme);
  }, [theme]);

  const themeSwitcher = () => {
    if (themeColor === "white") {
      changeTheme("black");
    } else {
      changeTheme("white");
    }
  };

  return (
    <>
      <div class="container__center">
        <div class="slider__container">
          <div onClick={themeSwitcher} class={`slider ${themeColor}`}>
            <Brightness2Icon />
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateProps = (state) => {
  return { theme: state.themeColor };
};
export default connect(mapStateProps, { changeTheme })(ThemeSwitcher);
