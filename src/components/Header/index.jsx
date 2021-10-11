import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function Header() {
  return (
    <AppBar
      position="static"
      variant="outlined"
      style={{ backgroundColor: "#0C0E30" }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Covid 19 Tracker
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
