import React from "react";

import Navigation from "../general/Navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
    </>
  );
};

export default Layout;
