import React from "react";
import CopyRight from "./CopyRight";

function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
        backgroundColor: "#0C0E30",
        height: "100px",
      }}
    >
      <CopyRight />
    </footer>
  );
}

export default Footer;
