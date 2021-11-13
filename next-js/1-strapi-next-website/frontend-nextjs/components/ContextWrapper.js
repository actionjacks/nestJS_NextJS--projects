import HeaderContext from "../context/HeadContext";
import { useState } from "react";

function ContextWrapper({ children, navigation }) {
  const [color, toggleColor] = useState(true);

  return (
    <HeaderContext.Provider value={{ navigation, color, toggleColor }}>
      {children}
    </HeaderContext.Provider>
  );
}
export default ContextWrapper;
