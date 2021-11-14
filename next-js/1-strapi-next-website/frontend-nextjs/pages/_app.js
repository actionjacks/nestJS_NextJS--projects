import { useState, useEffect } from "react";
import Header from "../components/Header";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import theme from "../theme/theme";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo-config";
import ContextWrapper from "../components/ContextWrapper";
import { appWithTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Router from "next/router";

//from initial props, navigation from strapi go to context api
function MyApp({ Component, pageProps }) {
  const [navigation, setNavigation] = useState(null);

  useEffect(async () => {
    const { API_URL } = process.env;
    const res = await fetch(`${API_URL}/Navigations`);
    const navigationItems = await res.json();

    setNavigation(navigationItems);
  }, []);

  console.log(pageProps);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <ContextWrapper navigation={navigation}>
          <Header isDark="true" />
        </ContextWrapper>

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export async function getServerSideProps({ Component, ctx, locale }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    props: {
      pageProps,
      ...(await serverSideTranslations(locale, ["common", "main"])),
    },
  };
}

export default appWithTranslation(MyApp);
