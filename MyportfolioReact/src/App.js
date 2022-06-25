import React, { useState, useEffect } from "react";
import "./App.scss";
//components
import ThemeSwitcher from "./components/ThemeSwitcher";
import Header from "./components/Header";
import WellcomePage from "./components/WellcomePage";
import About from "./components/About";
import Form from "./components/Form";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
//redux
import { connect } from "react-redux";
import { changeTheme } from "./actions";

function App({ theme }) {
  const [pageData, setPageData] = useState({});
  const [language, setlanguage] = useState("PL");

  function changeLanguage() {
    if (language === "PL") {
      setlanguage("EN");
    } else {
      setlanguage("PL");
    }
  }
  function loadData(Language) {
    fetch(`/myData${Language}.json`)
      .then((response) => response.json())
      .then((data) => {
        setPageData({
          content: data,
        });
      })
      .catch((err) => console.log(`HTML data not found :() ${err}`));
  }
  useEffect(() => {
    loadData(language);
  }, [language]);

  return (
    <div className={`${theme}`}>
      <div className="app">
        {language === "PL" ? (
          <button className="change__language" onClick={changeLanguage}>
            English
          </button>
        ) : (
          <button className="change__language" onClick={changeLanguage}>
            Polish
          </button>
        )}
        <Header data={pageData.content} theme={theme} />
      </div>
      <div className="scrollContainer">
        <ThemeSwitcher />
        <WellcomePage data={pageData.content} theme={theme} />
        <section id="page-1" className={`section`}>
          <About data={pageData.content} theme={theme} />
        </section>
        <section id="page-2" className={`section`}>
          <Portfolio data={pageData.content} theme={theme} />
        </section>
        <section id="page-3" className={`section`}>
          <Form data={pageData.content} theme={theme} />
        </section>
        <section id="page-4" className={`section`}>
          <div className="app__footer">
            <Footer theme={theme} />
          </div>
        </section>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { theme: state.themeColor };
};

export default connect(mapStateToProps, { changeTheme })(App);
