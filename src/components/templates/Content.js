import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15%;
  background: white;
  p {
    text-align: center;
    font-family: "Italiana", serif;
    font-size: 4vw;
    font-weight: 400;
    letter-spacing: -0.02em;
    font-style: italic;
  }
`;

const Content = ({ description }) => {
  return (
    <>
      <Wrapper>
        <p>{description}</p>
      </Wrapper>
    </>
  );
};

export default Content;
