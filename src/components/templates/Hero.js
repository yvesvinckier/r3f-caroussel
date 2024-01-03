import React, { useRef, useLayoutEffect } from "react";
import styled from "@emotion/styled";
import { GatsbyImage } from "gatsby-plugin-image";
// import { getSrc } from "gatsby-plugin-image";
import { gsap } from "gsap";

const HeroWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: -2;
`;

const StyledTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Italiana", serif;
  font-size: 12vw;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 0.7em;
  font-style: italic;
  color: white;
  width: 100%;
  text-align: center;
  z-index: 1;
`;

const BgImg = styled(GatsbyImage)`
  position: absolute;
  width: 100%;
  height: 100%;
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
  }
`;
// const BgContainer = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   width: 100%;
//   height: 100%;
//   & > img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover !important;
//     object-position: 50% 50% !important;
//   }
// `;

const Hero = ({ title, cover }) => {
  // const imageSrc = getSrc(cover);
  const wordRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.from(wordRef.current.children, {
        y: "100%",
        opacity: 0,
        stagger: 0.06,
        ease: "expo",
        duration: 1.4,
      });
    }, wordRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <HeroWrapper>
        <BgImg image={cover.gatsbyImageData} alt={title.text} />
        {/* <BgContainer>
          <img src={imageSrc} alt={title.text} />
        </BgContainer> */}
        <StyledTitle>
          <span className="word" ref={wordRef}>
            {title.text.split("").map((item, i) => {
              return (
                <span
                  key={i}
                  className="char"
                  style={{ display: "inline-block", willChange: "transform" }}
                >
                  {item}
                </span>
              );
            })}
          </span>
        </StyledTitle>
      </HeroWrapper>
    </>
  );
};

export default Hero;
