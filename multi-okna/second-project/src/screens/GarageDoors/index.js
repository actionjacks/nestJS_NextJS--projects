import GarageDoorBox from "./GarageDoorBox/GarageDoorBox";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/GarageDoorsStyles";

function GarageDoors({ description, classes }) {
  const GarageBoxImgSrc = [
    "../assets/gates/img1.webp",
    "../assets/gates/img2.webp",
    "../assets/gates/img3.webp",
    "../assets/gates/img4.webp",
  ];

  return (
    <div className={classes.root}>
      <div data-aos="fade-right" className={classes.BoxContainer}>
        {GarageBoxImgSrc.map((item, inx) => (
          <GarageDoorBox
            imgUrl={item}
            key={inx}
            description={description[inx]}
          />
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(GarageDoors);
