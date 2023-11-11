import { notoSerif } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

function ReasonComponent({
  title,
  image,
  content,
  color,
}: {
  title: string;
  image: string;
  content: string;
  color: string;
}) {
  return (
    <div className="w-full md:w-1/3 relative lg:p-5 flex flex-col justify-center items-center ">
      <Image
        alt="image"
        className="w-full h-auto lg:w-auto lg:h-1/2 z-10"
        src={image}
        height={400}
        width={400}
      />
      <div className={`w-2/3 h-1/2 top-10 xl:top-24 bg-${color} absolute z-0`} />
      <div className="flex items-center justify-center flex-col">
        <div className="lg:w-1/2">
          <h3
            className={`${notoSerif.className} font-bold text-4xl text-center`}
          >
            {title}
          </h3>
        </div>
        <div className="w-[80%] text-center">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default ReasonComponent;
