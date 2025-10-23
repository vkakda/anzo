import React from "react";

const Page3 = () => {
  return (
    <div className="h-screen relative flex items-center justify-center bg-white ">
      <img
        className="absolute z-20"
        src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_969,h_557,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png"
        alt=""
      />
      <video
        autoPlay
        loop
        muted
        className="relative z-10 h-[80vh] w-[59vw] object-cover"
        src="./videos/file.mp4"
      ></video>
      <div className="z-0 h-0.5 w-3/4 top-[40%] absolute bg-black"></div>
      <div className="z-0 h-0.5 w-5/6 top-[55%] absolute bg-black"></div>
      <div className="z-0 h-0.5 w-full top-[70%] absolute bg-black"></div>
    </div>
  );
};

export default Page3;
