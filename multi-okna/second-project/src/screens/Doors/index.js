import DoorBox from "./DoorBox/DoorBox";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/DoorsStyles";

function Doors({ classes, description }) {
  const DoorBoxImgSrc = [
    "../assets/doors/img1.webp",
    "../assets/doors/img2.webp",
    "../assets/doors/img3.webp",
    "../assets/doors/img4.webp",
    "../assets/doors/img5.webp",
    "../assets/doors/img6.webp",
  ];

  return (
    <div className={classes.root}>
      <div className={classes.description}>
        <h2 className={classes.paragraph}>{description}</h2>
      </div>
      <div className={classes.doorBoxContainer}>
        {DoorBoxImgSrc.map((item, inx) => (
          <DoorBox imgUrl={item} key={inx} />
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(Doors);
