import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

import Carousel from "../three/Carousel";
import "../style/styles.css";

const StyledBackground = styled.div`
  background: #151515;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const IndexPage = ({ data }) => {
  const works = data.allPrismicWorks.edges;
  return (
    <StyledBackground>
      <Suspense fallback={null}>
        <Canvas>
          <Carousel works={works} />
        </Canvas>
      </Suspense>
    </StyledBackground>
  );
};

export const query = graphql`
  query {
    allPrismicWorks(sort: { first_publication_date: DESC }) {
      edges {
        node {
          uid
          data {
            cover {
              gatsbyImageData(width: 1800, placeholder: BLURRED)
              alt
            }
            title {
              text
            }
            description
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
