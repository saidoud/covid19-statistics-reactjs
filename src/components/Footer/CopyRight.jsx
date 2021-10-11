import React from "react";
import { Typography, Link } from "@material-ui/core";

function CopyRight() {
  return (
    <Typography
      component="p"
      variant="h6"
      align="center"
      style={{ color: "white" }}
    >
      {"Copyright © "}
      <Link href="#">devSaid </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default CopyRight;
