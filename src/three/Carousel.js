import React, { useEffect, useRef, useState, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { usePrevious } from "react-use";
import gsap from "gsap";

import CarouselItem from "./CarouselItem";
import { getPiramidalIndex } from "../utils";

/*------------------------------
Plane Settings
------------------------------*/
const planeSettings = {
  width: 1,
  height: 2.5,
  gap: 0.1,
};

/*------------------------------
Gsap Defaults
------------------------------*/
gsap.defaults({
  duration: 2.5,
  ease: "power3.out",
});

/*------------------------------
Carousel
------------------------------*/
const Carousel = ({ works }) => {
  const [root, setRoot] = useState();

  const [activePlane, setActivePlane] = useState(null);
  const prevActivePlane = usePrevious(activePlane);
  const { viewport } = useThree();

  /*--------------------
  Vars
  --------------------*/
  const progress = useRef(0);
  const startX = useRef(0);
  const isDown = useRef(false);
  const speedWheel = 0.02;
  const speedDrag = -0.3;
  const images = useMemo(() => {
    if (root) return root.children;
  }, [root]);

  /*--------------------
  Diaplay Items
  --------------------*/
  const displayItems = (image, index, active) => {
    const piramidalIndex = getPiramidalIndex(images, active)[index];
    gsap.to(image.position, {
      x: (index - active) * (planeSettings.width + planeSettings.gap),
      y: images.length * -0.1 + piramidalIndex * 0.1,
      // y: 0,
    });
  };

  /*--------------------
  RAF
  --------------------*/
  useFrame(() => {
    progress.current = Math.max(0, Math.min(progress.current, 100));

    const active = Math.floor((progress.current / 100) * (images.length - 1));
    images.forEach((image, index) => displayItems(image, index, active));
  });

  /*--------------------
  Handle Wheel
  --------------------*/
  const handleWheel = (e) => {
    if (activePlane !== null) return;
    const isVerticalScroll = Math.abs(e.deltaY) > Math.abs(e.deltaX);
    const wheelProgress = isVerticalScroll ? e.deltaY : e.deltaX;
    progress.current = progress.current + wheelProgress * speedWheel;
  };

  /*--------------------
  Handle Down
  --------------------*/
  const handleDown = (e) => {
    if (activePlane !== null) return;
    isDown.current = true;
    startX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  /*--------------------
  Handle Up
  --------------------*/
  const handleUp = () => {
    isDown.current = false;
  };

  /*--------------------
  Handle Move
  --------------------*/
  const handleMove = (e) => {
    if (activePlane !== null || !isDown.current) return;
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const mouseProgress = (x - startX.current) * speedDrag;
    progress.current = progress.current + mouseProgress;
    startX.current = x;
  };

  /*--------------------
  Click
  --------------------*/
  useEffect(() => {
    if (!images) return;
    if (activePlane !== null && prevActivePlane === null) {
      progress.current = (activePlane / (images.length - 1)) * 100; // Calculate the progress.current based on activePlane
    }
  }, [activePlane, images, prevActivePlane]);

  /*--------------------
  Render Plane Events
  --------------------*/
  const renderPlaneEvents = () => {
    return (
      <mesh
        position={[0, 0, -0.01]}
        onWheel={handleWheel}
        onPointerDown={handleDown}
        onPointerUp={handleUp}
        onPointerMove={handleMove}
        onPointerLeave={handleUp}
        onPointerCancel={handleUp}
      >
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial transparent={true} opacity={0} />
      </mesh>
    );
  };

  /*--------------------
  Render Slider
  --------------------*/
  const renderSlider = () => {
    return (
      <group ref={setRoot}>
        {works.map(({ node: work }, i) => (
          <CarouselItem
            width={planeSettings.width}
            height={planeSettings.height}
            setActivePlane={setActivePlane}
            activePlane={activePlane}
            key={i}
            image={work.data.cover.gatsbyImageData}
            index={i}
            slug={`/${work.uid}/`}
          />
        ))}
      </group>
    );
  };

  return (
    <group>
      {renderPlaneEvents()}
      {renderSlider()}
    </group>
  );
};

export default Carousel;
