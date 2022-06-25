import React from "react";
import WindowBox from "./WindowBox";

import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import gatesLogo from "./assets/logo-brama.png";
import gatesNames from "./gatesNames";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/FifthScreenStyles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function FifthScreen({ classes }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.root}>
      <WindowBox
        url={gatesLogo}
        title="Osłony Okienne"
        desc="Lorem lorem lorem lorem"
      />
      <Container className={classes.tabs}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
        >
          {gatesNames.map((item, index) => (
            <Tab
              className={classes.tab}
              label={item.title}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
        {gatesNames.map((item, index) => (
          <TabPanel className={classes.tabPanel} value={value} index={index}>
            <WindowBox
              tabContent={true}
              url={item.url}
              title={item.title}
              desc={item.desc}
            />
          </TabPanel>
        ))}
      </Container>
    </Container>
  );
}

export default withStyles(styles)(FifthScreen);
