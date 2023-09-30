import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Plane from "../three/Plane";
import "../style/styles.css";

// import images from "../data/images";

const IndexPage = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas>
          <Plane />
        </Canvas>
      </Suspense>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
