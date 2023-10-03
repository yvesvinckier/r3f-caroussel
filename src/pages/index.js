import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import CarouselItem from "../three/CarouselItem";
import "../style/styles.css";

// import images from "../data/images";

const IndexPage = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <CarouselItem />
        </Suspense>
      </Canvas>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
