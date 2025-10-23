import React from 'react'

const Page4 = () => {
  return (
    <div className="h-screen relative bg-black overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/robo.mp4"
      ></video>

      {/* White Border Container */}
      <div className="relative z-10  h-[98%] w-[98%] border-[6px] border-white rounded-[40px] flex items-center justify-center overflow-hidden top-[1%] left-[1%]">
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-[10vw] font-[anton] uppercase text-center">
            Investment
          </h1>
        </div>

        {/* Optional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
      </div>
    </div>
  )
}

export default Page4