import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Routes from "./routes";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

import ScrollBtn from "./components/ScrollBtn";
import ErrorAlert from "./components/ErrorAlert";
import Spinner from "./components/Spinner";

import { withStyles } from "@material-ui/core/styles";
import styles from "./AppStyles";

function App({ classes }) {
  const [pageData, setPageData] = useState(null);
  const [pageDataErr, setPageDataErr] = useState(null);

  function getPageData() {
    fetch(`./_page_content.json`)
      .then((res) => res.json())
      .then(
        ({
          contacts,
          navbarNames,
          homeContent,
          windowContent,
          windowsCovers,
          doors,
          garageDoors,
          contact,
        }) =>
          setPageData({
            contacts,
            navbarNames,
            homeContent,
            windowContent,
            windowsCovers,
            doors,
            garageDoors,
            contact,
          })
      )
      .catch((err) =>
        setPageDataErr({
          errTitle: "Och nie! Błąd na stronie.",
          errContent: "Bardzo nam przykro, coś poszło nie tak, może F5 pomoże.",
        })
      );
  }

  useEffect(() => {
    getPageData();

    //animations
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div id="-root" className={classes.root}>
      {pageDataErr && (
        <ErrorAlert
          errTitle={pageDataErr.errTitle}
          errContent={pageDataErr.errContent}
        />
      )}

      {!pageDataErr && !pageData && <Spinner />}

      {pageData && !pageDataErr && (
        <>
          <Navbar
            contacts={pageData.contacts}
            pageData={pageData.navbarNames}
          />
          <Routes data={pageData} />
          <ScrollBtn />
          <Footer />
        </>
      )}
    </div>
  );
}

export default withStyles(styles)(App);
