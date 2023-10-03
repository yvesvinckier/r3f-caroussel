import React, { useEffect, useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import Plane from "./Plane";

import img1 from "../../static/1.jpg";

const CarouselItem = () => {
  const groupRef = useRef();
  const [hover, setHover] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { viewport } = useThree();

  useEffect(() => {
    gsap.killTweensOf(groupRef.current.position);
    gsap.to(groupRef.current.position, {
      z: isActive ? 0 : -0.01,
      duration: 0.2,
      ease: "power3.out",
      delay: isActive ? 0 : 2,
    });
  }, [isActive]);

  /*------------------------------
  Hover effect
  ------------------------------*/
  useEffect(() => {
    const hoverScale = hover && !isActive ? 1.1 : 1;
    gsap.to(groupRef.current.scale, {
      x: hoverScale,
      y: hoverScale,
      duration: 0.5,
      ease: "power3.out",
    });
  }, [hover, isActive]);

  const handleClose = (e) => {
    e.stopPropagation();
    if (!isActive) return;
    setIsActive(false);
  };

  return (
    <group
      ref={groupRef}
      onClick={() => {
        setIsActive(true);
      }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <Plane width={1} height={2.5} image={img1} isActive={isActive} />
      {isActive ? (
        <mesh position={[0, 0, 0.01]} onClick={handleClose}>
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshBasicMaterial transparent={true} opacity={0} color={"red"} />
        </mesh>
      ) : null}
    </group>
  );
};

export default CarouselItem;
