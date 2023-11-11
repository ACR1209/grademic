import { inter, notoSerif } from "@/utils/fonts";
import React from "react";
import TextHero from "./TextHero";
import ImageHero from "./ImageHero";
import Image from "next/image";


function HeroContainer() {
  return (
    <section className="flex lg:flex-row flex-col p-10">
      <div className="lg:w-2/5 ">
        <TextHero/>
      </div>
      <div className="lg:w-3/5 hidden lg:flex">
        <ImageHero/>
      </div>

      <div className="flex lg:hidden">
        <Image src="/landing2.png" alt="aea" width={400} height={400}/>
      </div>
    </section>
  );
}

export default HeroContainer;
