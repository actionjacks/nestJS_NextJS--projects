import React from "react";

import OurBrands from "../../components/OurBrands/OurBrands";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/HomeStyles";
//import assets
import homeTopBanner from "./assets/homeTopBanner.webp";
//import assets localization from public folder
const brands = [
  "../assets/img1.webp",
  "../assets/img2.webp",
  "../assets/img3.webp",
  "../assets/img4.webp",
  "../assets/img5.webp",
  "../assets/img6.webp",
  "../assets/img7.webp",
  "../assets/img8.webp",
  "../assets/img9.webp",
  "../assets/img10.webp",
  "../assets/img11.webp",
  "../assets/img12.webp",
  "../assets/img13.webp",
  "../assets/img14.webp",
];
//todo add styles form header and description
function Home({ classes, data }) {
  return (
    <main className={classes.root}>
      <div className={classes.topHomeContainer}>
        <div className={classes.leftSite} data-aos="flip-up">
          <h2 className={classes.headerTitle}>{data[0].headerTitle}</h2>
          <h3 className={classes.smallHeader}>{data[0].smallHeader}</h3>
          <hr />
          <p className={classes.description}>{data[0].description}</p>
          <hr />
        </div>
        <div className={classes.rightSite} data-aos="flip-up">
          <img
            loading="lazy"
            src={homeTopBanner}
            alt=""
            className={classes.homeTopBanner}
          />
        </div>
      </div>

      <div className={classes.middleHomeContainer}>
        <p className={classes.contactParagraph} data-aos="fade-left">
          <span className={classes.contactParagraphSpan}>
            {data[0].contactParagraph}
          </span>
        </p>
      </div>

      <div className={classes.bottomHomeContainer}>
        <p className={classes.bottomParagraph}>{data[0].ourBrands}</p>
        <div className={classes.ourBrandsContainer}>
          {brands.map((url, index) => (
            <OurBrands key={index} url={url} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default withStyles(styles)(Home);
