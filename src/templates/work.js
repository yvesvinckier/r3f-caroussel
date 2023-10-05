import React from "react";

const work = ({ pageContext }) => {
  const { title, cover, description } = pageContext.data;
  const { next } = pageContext;

  return (
    <>
      <div>{title.text}</div>
    </>
  );
};

export default work;
