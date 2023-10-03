import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Carousel from "../three/Carousel";
import "../style/styles.css";

const IndexPage = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas>
          <Carousel />
        </Canvas>
      </Suspense>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
