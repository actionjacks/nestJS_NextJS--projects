import WindowCoversBox from "./WindowCoversBox/WindowCoversBox";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/WindowCoversStyles";

function WindowCovers({ classes, description }) {
  const WindowCoversImgSrc = [
    "../assets/windowsCovers/img1.webp",
    "../assets/windowsCovers/img2.webp",
    "../assets/windowsCovers/img3.webp",
    "../assets/windowsCovers/img4.webp",
    "../assets/windowsCovers/img5.webp",
    "../assets/windowsCovers/img6.webp",
    "../assets/windowsCovers/img7.webp",
    "../assets/windowsCovers/img8.webp",
    "../assets/windowsCovers/img9.webp",
    "../assets/windowsCovers/img10.webp",
  ];

  return (
    <div className={classes.root}>
      <div data-aos="fade-right" className={classes.BoxContainer}>
        {WindowCoversImgSrc.map((item, inx) => (
          <WindowCoversBox
            imgUrl={item}
            key={inx}
            description={description[inx]}
          />
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(WindowCovers);
