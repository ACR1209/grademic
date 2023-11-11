import { inter, notoSerif } from "@/utils/fonts";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
function TextHero() {
  return (
    <>
      <h1
        className={`${notoSerif.className} font-bold text-5xl md:text-6xl xl:text-8xl mb-5 md:mb-7`}
      >
        Encuentra y reseña a tus profesores
      </h1>
      <p className={`${inter.className} `}>
        Más de 1000 profesores y más de 10000 reseñas en nuestro sitio para que
        encuentres el profesor ideal
      </p>
      <div className="mt-5">
        <SearchBar />
      </div>
    </>
  );
}

export default TextHero;
