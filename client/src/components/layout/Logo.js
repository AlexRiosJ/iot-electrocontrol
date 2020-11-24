import React, { Fragment } from "react";
import logo from "./logo1024.png";

const Logo = () => (
  <Fragment>
    <img
      src={logo}
      alt=""
      style={{ width: "30%", margin: "auto", display: "block" }}
    />
  </Fragment>
);

export default Logo;
