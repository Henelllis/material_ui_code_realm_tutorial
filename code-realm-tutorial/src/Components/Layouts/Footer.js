import React from "react";
import { Paper, Tab, Tabs } from "@material-ui/core";

export default Footer => (
  <Paper>
    <Tabs indicatorColor="primary" textColor="primary" centered value={0}>
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  </Paper>
);
