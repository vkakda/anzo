import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";


const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".rotateText", {
      transform: "rotateX(-80deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotateText",
        // markers: true,
        start: "top 70%",
        end: "top -180%",
        scrub: 2
      },
    });
  });

//   const animation = () => {
//     const canvas  = document.querySelector("canvas");
    
//     const context = canvas.getContext("2d");

//     const imagePaths = Array.from({length: 410}, (elem,idx) => {
//         return `/src/assets/webFrame/file${String(idx).padStart(3, '0')}.png`
//     })

//     const images = []
    
//     imagePaths.forEach(function(path, idx){
//       const img = new Image();
//         img.src = path;

//         img.onload = () => images[idx] = img;
        
//     })

//     let currentFrame = 0
//     let lastFrame = 0

//     const loopAnimation = (timestamp) => {

//         if(images.length == 391 && timestamp - lastFrame >= 1000/30){
//             context.clearRect(0, 0, canvas.width, canvas.height);
//             context.drawImage(images[currentFrame], 0, 0, canvas.width, canvas.height);
//             currentFrame = (currentFrame + 1) % 391;
//             lastFrame = timestamp
//         }
//         requestAnimationFrame(loopAnimation)
//     }

//     requestAnimationFrame(loopAnimation)
    
// }
    
//     useEffect(() => {
//       animation()
    
//     },)
    

  return (
    <div id="section2" className="bg-white text-black p-20 text-center">
      <h3 className="text-gray-500 text-xl font-[anzo3]">
        © Anzo.Studio® 2025 | designed and developed
      </h3>
      <div className="rotateText  mt-10">
        <h1 className="text-[20vw] text-black font-[anton] uppercase leading-[20vw]">
          IMPACTFUL
        </h1>
      </div>
      <div className="rotateText ">
        <h1 className="text-[20vw] text-black font-[anton] uppercase leading-[20vw]">
          DESIGN
        </h1>
      </div>
      <div className="rotateText ">
        <h1 className="text-[20vw] text-black font-[anton] uppercase leading-[20vw]">
          IS THE
        </h1>
      </div>
      <div className="rotateText ">
        <h1 className="text-[20vw] text-black font-[anton] uppercase leading-[20vw]">
          DESIGN
        </h1>
      </div>
      <div className="rotateText ">
        <h1 className="text-[20vw] text-black font-[anton] uppercase leading-[20vw]">
          THAT
        </h1>
      </div>
      <div className="rotateText">
      <canvas className="h-full w-[90%] left-1/2 -translate-x-1/2 absolute"></canvas>
        <h1 className="text-[20vw] text-black font-[anton] uppercase leading-[20vw]">
          WORKS!
        </h1>
      </div>


      <div className="mt-10 flex items-center justify-center gap-10 scale-100">
        <a href="https://www.tesla.com/" target="_blank">
          <img
            src="https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Wordmark-Black-Logo.wine.svg"
            alt="Tesla"
            className=" h-20 w-40 grayscale"
          />
        </a>
        <a href="https://www.figma.com/" target="_blank">
          <img
            src="https://www.svgrepo.com/show/361494/figma-logo.svg"
            alt="Figma"
            className="h-10 w-24 grayscale"
          />
        </a>
        <a href="https://www.wix.com/studio" target="_blank">
          <img
            src="https://static.wixstatic.com/media/0d6674_b39c8ddaafbd4b8dbb459a4221ee8227~mv2.png/v1/fill/w_690,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2010000017556.png"
            alt="Wix Studio"
            className="h-30 w-40 grayscale"
          />
        </a>
        <a href="https://plus.google.com/" target="_blank">
          <img
            src="https://images.seeklogo.com/logo-png/42/2/google-black-logo-png_seeklogo-429387.png"
            alt="Google+"
            className="h-25 w-24 grayscale"
          />
        </a>
        <a href="https://www.behance.net/" target="_blank">
          <img
            src="https://www.cdnlogo.com/logos/b/14/behance.svg"
            alt="Behance"
            className="h-10 w-24 grayscale"
          />
        </a>
      </div>

      <div className="h-0.5 w-1/3 relative left-1/2 -translate-x-1/2 mt-10 bg-black"></div>
    </div>
  );
};

export default Page2;
