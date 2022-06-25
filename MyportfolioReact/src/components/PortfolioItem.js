import React from "react";

function PortfolioItem({ image, link, sourceCode, isDeployed, theme }) {
  return (
    <>
      <div div className={`PortfolioItem ${theme}`}>
        <a href={link}>
          <img src={image} alt="" />
        </a>
        {isDeployed === "false" ? (
          <span className="isDeployed">no deployed</span>
        ) : null}
        <a className={`source ${theme}`} href={sourceCode}>
          source code
        </a>
      </div>
    </>
  );
}

export default PortfolioItem;
