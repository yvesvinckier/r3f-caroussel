import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useArrayRef() {
  // create a refs array and initialize it to an empty array
  const refs = useRef([]);
  refs.current = [];
  // then push all the ref in the array
  return [refs, (ref) => ref && refs.current.push(ref)];
}

export function SplitText({ children }) {
  const [refs, setRef] = useArrayRef();
  const triggerRef = useRef();

  useEffect(() => {
    const splitTextTween = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top bottom",
        // markers: true,
      },
    });
    splitTextTween.fromTo(
      refs.current,
      {
        autoAlpha: 0,
        display: "inline-block",
        y: "100%",
      },
      {
        autoAlpha: 1,
        delay: 0.2,
        display: "inline-block",
        duration: 1.5,
        ease: "back.inOut",
        stagger: 0.05,
        y: "0%",
      }
    );
  }, [refs]);

  let words = children.toString().split(" ");
  // console.log(words);
  return words.map((word, i) => {
    return (
      <span
        ref={triggerRef}
        key={children + i}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        <span
          ref={setRef}
          style={{ display: "inline-block", willChange: "transform" }}
        >
          {word + (i !== words.length - 1 ? "\u00A0" : "")}
        </span>
      </span>
    );
  });
}
