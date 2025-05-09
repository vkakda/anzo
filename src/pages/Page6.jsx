import React from "react";

const Page6 = () => {
  return (
    <div className="h-screen relative p-5 bg-white">
      <div className="h-full w-full overflow-hidden bg-black rounded-[50px]">
        <video
          autoPlay
          loop
          muted
          className=" h-full w-full object-cover"
          src="src\assets\fileearth round.mp4">
            </video>
            <h1 className="index-0 flex items-center justify-center font_2 wixui-rich-text__tex text-[10vw] absolute uppercase text-white text-center">About</h1>
      </div>
    </div>
  );
};

export default Page6;
