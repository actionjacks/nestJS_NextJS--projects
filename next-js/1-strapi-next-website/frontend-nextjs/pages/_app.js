import Header from "../components/Header";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";

const theme = {
  colors: {
    primary: "#fff9",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header isDark="true" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
