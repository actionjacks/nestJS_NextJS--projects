import Header from "../components/Header";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import theme from "../theme/theme";
import getConfig from "next/config";

function MyApp({ Component, pageProps, navigation }) {
  console.log(navigation);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header navigation={navigation} isDark="true" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

const { publicRuntimeConfig } = getConfig();
MyApp.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/Navigations`);
  const navigation = await res.json();

  return { navigation };
};

export default MyApp;
