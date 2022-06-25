import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import RubberBand from "react-reveal/RubberBand";

function WellcomePage({ data, theme }) {
  return (
    <>
      {data?.wellcomePage ? (
        <section className="wellcomePage">
          <div className={`wellcomePage__banerText ${theme}`}>
            <RubberBand>
              <h1 className={`${theme}`}>{data.wellcomePage.title}</h1>
              <h3 className={`${theme}`}>{data.wellcomePage.mydesc}</h3>
            </RubberBand>
            <div className="icons">
              <a href="https://github.com/actionjacks">
                <GitHubIcon className={`icon__github ${theme}`} />
              </a>
            </div>
          </div>
        </section>
      ) : (
        <section className="errorDataNotFound">
          <h1>Data.json missing ?</h1>
        </section>
      )}
    </>
  );
}

export default WellcomePage;
