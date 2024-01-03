import React from "react";
import Hero from "../components/templates/Hero";
import Content from "../components/templates/Content";

const work = ({ pageContext }) => {
  const { title, cover, description } = pageContext.data;
  // const { next } = pageContext;

  return (
    <>
      <Hero title={title} cover={cover} />
      <Content description={description} />
    </>
  );
};

export default work;
