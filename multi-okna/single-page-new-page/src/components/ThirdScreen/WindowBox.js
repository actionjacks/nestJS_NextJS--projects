import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/WindowBoxStyles";

function WindowBox({ url, logo, title, desc, classes, tabContent }) {
  return (
    <Card className={classes.root}>
      <CardActionArea
        className={tabContent ? classes.cardArea : classes.cardAreaTop}
      >
        <CardMedia
          component="img"
          alt={`${title} logo`}
          className={!tabContent ? classes.mediaTop : classes.media}
          image={url}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          {logo ? (
            <CardMedia component="img" alt={`${title} logo`} image={logo} />
          ) : (
            <CardMedia alt={`${title} logo`} image={logo} />
          )}
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
          <Typography
            className={classes.descTop}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(WindowBox);
