import React from 'react'

const TiltText = (props) => {
  return (
    <div id="tiltDiv" ref={props.abc} className="mt-20">
    <h1 className="text-[3.9vw] leading-[4vw] uppercase font-[anzo2]">
      I am <span className="text-black">DARK MODE</span>™
    </h1>
    <h1 className="text-[8vw] leading-[7vw] font-[anzo1]">Designer</h1>
    <h1 className="text-[3.9vw] leading-[4vw] uppercase font-[anzo2]">
      To Hire
    </h1>
  </div>
  )
}

export default TiltText