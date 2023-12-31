import React from "react";
import Layout from "../../components/general/Layout";

const CustomLayout = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export default CustomLayout;
