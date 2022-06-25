import WindowBox from "./WindowBox/WindowBox";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/WindowsStyles";

import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

function Windows({ classes, data }) {
  return (
    <div className={classes.root}>
      <div className={classes.windowBoxContainer}>
        {data[0].windowBox.map(({ imgUrl, title, desc }) => (
          <WindowBox imgUrl={imgUrl} title={title} desc={desc} />
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(Windows);

const TopBanner = styled(LazyLoadImage)`
  object-fit: cover;
  width: 100%;
  margin-left: 60%;

  @media (max-width: 991.98px) {
    margin-left: 50%;
  }
  @media (max-width: 767.98px) {
    margin-left: 20%;
  }
  @media (max-width: 575.98px) {
    margin-left: 0;
  }
`;
