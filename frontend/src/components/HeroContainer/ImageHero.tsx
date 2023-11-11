import Image from "next/image";
import React from "react";

function ImageHero() {
  return (
    <>
      <div className="pl-36 top-0  h-screen absolute">
        <div className="w-[25vw] h-[25vw] absolute -bottom-4 left-[28vw] z-40">
          <Image
            alt="imagen personas"
            className="z-50"
            src="/landing1.png"
            width={400}
            height={400}
          />
        </div>
        <div className="w-[25vw] h-[25vw] absolute left-[5vw] bottom-64 z-40">
          <Image
            alt="imagen personas"
            className="z-50"
            src="/landing2.png"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="absolute top-0 pl-36 flex flex-row h-screen">
        <div className=" relative">
          <div className="w-[20vw] top-0 bg-grademic-yellow-800 h-[60%] absolute left-0 " />
          <div className="w-[20vw] bottom-[5vh] bg-grademic-red-700 h-[30%] absolute  left-0" />
        </div>
        <div className=" relative">
          <div className="w-[20vw] top-0 bg-grademic-yellow-600 h-[50vh] absolute left-[22vw] z-0" />
          <div className="w-[20vw] bottom-[5vh] bg-grademic-red-800 h-[40vh] absolute  left-[22vw] z-0" />
        </div>
      </div>
    </>
  );
}

export default ImageHero;
