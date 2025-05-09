import React, { useRef, useState } from "react";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import bgImage from "../assets/Picsartbg.jpg";

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        40
    );
    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 5
    );
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 2,
        ease: "power2.out"
      });
    },
    [xVal, yVal]
  );

  return (
    <div
      id="page1"
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="h-screen relative p-7 bg-white"
    >
      <div
        id="page1-in"
        className="relative shadow-xl p-20 shadow-gray-700 h-full w-full bg-cover rounded-[50px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1860,h_904,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)] "
        
      >
        <img
          className="h-[50px] scale-y-[-1]"
          src="https://www.olevlight.com/wp-content/uploads/2018/04/logo-white.png"
        />

        <TiltText abc={tiltRef} />

        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
