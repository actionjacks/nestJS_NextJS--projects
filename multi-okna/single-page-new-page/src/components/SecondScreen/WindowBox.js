import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/WindowBoxStyles";

function WindowBox({ url, logo, title, desc, classes }) {
  return (
    <Card className={classes.root}>
      <CardActionArea
        className={!logo ? classes.cardArea : classes.cardAreaBottom}
      >
        <CardMedia
          component="img"
          alt={`${title} logo`}
          className={logo ? classes.media : classes.mediaTop}
          image={url}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          {logo ? (
            <CardMedia
              component="img"
              alt={`${title} logo`}
              className={classes.mediaLogo}
              image={logo}
            />
          ) : (
            <CardMedia
              alt={`${title} logo`}
              className={classes.mediaLogo}
              image={logo}
            />
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
            className={logo ? classes.desc : classes.descTop}
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
