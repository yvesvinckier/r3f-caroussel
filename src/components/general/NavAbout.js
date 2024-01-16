import React, { useRef } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(SplitText);

const StyledNavAbout = styled.div`
  position: relative;
  mix-blend-mode: multiply;
  a {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    span {
      will-change: transform;
      font-family: "Inter", sans-serif;
      perspective: 1000px;
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`;

const NavAbout = () => {
  const aboutRef = useRef();
  const originalRef = useRef();
  const cloneRef = useRef();

  const tl = useRef();

  const { contextSafe } = useGSAP();

  useGSAP(
    () => {
      gsap.set(cloneRef.current, { yPercent: -100 });
      SplitText.create(originalRef.current, {
        type: "chars",
      });
      SplitText.create(cloneRef.current, { type: "chars" });
    },
    { scope: aboutRef }
  );

  const handleMouseEnter = contextSafe(({ scope: aboutRef }) => {
    tl.current = gsap
      .timeline({
        defaults: { duration: 0.5, ease: "power2", stagger: 0.025 },
      })
      .to(originalRef.current.children, {
        y: "100%",
        rotationX: -90,
        opacity: 0,
      })
      .to(
        cloneRef.current.children,
        {
          startAt: { y: "-100%", rotationX: 90, opacity: 0 },
          y: "0%",
          rotationX: 0,
          opacity: 1,
        },
        0
      );
  });

  const handleMouseLeave = contextSafe(({ scope: aboutRef }) => {
    tl.current = gsap
      .timeline({
        defaults: { duration: 0.5, ease: "power2", stagger: 0.025 },
      })
      .to(cloneRef.current.children, {
        y: "-100%",
        rotationX: 90,
        opacity: 0,
      })
      .to(
        originalRef.current.children,
        {
          startAt: { y: "100%", rotationX: -90, opacity: 0 },
          y: "0%",
          rotationX: 0,
          opacity: 1,
        },
        0
      );
  });

  return (
    <StyledNavAbout
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link ref={aboutRef} to="/">
        <span ref={originalRef}>About</span>
        <span ref={cloneRef}>About</span>
      </Link>
    </StyledNavAbout>
  );
};

export default NavAbout;
