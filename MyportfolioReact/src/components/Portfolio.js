import React from "react";
import PortfolioItem from "./PortfolioItem";

function Portfolio({ data, theme }) {
  return (
    <div className={`portfolio ${theme}`}>
      {data?.portfolio ? (
        <>
          <h3 className="portfolio__title">{data.portfolio}</h3>
          <div className="porfolio__myWorkContainer">
            {data?.myWork.map((item, index) => (
              <PortfolioItem
                key={index}
                image={item.image}
                link={item.link}
                isDeployed={item.isDeployed}
                sourceCode={item.sourceCode}
                theme={theme}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Portfolio;
