import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { graphql } from "gatsby";

import Carousel from "../three/Carousel";
import "../style/styles.css";

const IndexPage = ({ data }) => {
  const works = data.allPrismicWorks.edges;
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Carousel works={works} />
        </Suspense>
      </Canvas>
    </>
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
