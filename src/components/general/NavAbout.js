import React, { useRef, useEffect } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const StyledNavAbout = styled.div`
  position: relative;
  mix-blend-mode: multiply;
  color: white;
  overflow: hidden;
  a {
    display: block;
    font-size: 1.2rem;
    color: white;
    text-decoration: none;
    font-family: "Inter", sans-serif;
    text-transform: uppercase;
    &::after {
      display: block;
      content: "";
      height: 1px;
      background-color: white;
      position: absolute;
      bottom: 0;
      width: 100%;
      transform: translateX(-101%);
    }
    &:hover {
      color: white;
    }
    &:hover::after {
      transition: transform 0.3s cubic-bezier(0.5, 0.7, 0.4, 1);
      transform: translateX(0);
      background-color: white;
    }
    &.animate-out::after {
      transition: transform 0.3s cubic-bezier(0.5, 0.7, 0.4, 1);
      transform: translateX(100%);
    }
  }
`;

const NavAbout = () => {
  const aboutRef = useRef();

  useEffect(() => {
    aboutRef.current.addEventListener("mouseleave", () => {
      aboutRef.current.classList.add("animate-out");
    });
    aboutRef.current.ontransitionend = function () {
      aboutRef.current.classList.remove("animate-out");
    };
  }, []);
  return (
    <StyledNavAbout>
      <Link ref={aboutRef} to="/">
        About
      </Link>
    </StyledNavAbout>
  );
};

export default NavAbout;
