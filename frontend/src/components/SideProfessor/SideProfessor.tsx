import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import { ProfessorWithGrade } from "@/types/professorWithGrade";
import Image from "next/image";

function SideProfessor({ professor }: { professor: ProfessorWithGrade }) {
  return (
    <div>
      <Breadcrumbs
        routes={[
          { to: "/", display: "Inicio" },
          {
            to: `/search/professors?query=${professor.firstNames}`,
            display: "Buscar",
          },
          { to: `/professors/${professor.id}`, display: "Profesores" },
        ]}
      />

      <div className="relative w-[400px] h-[400px] -mt-10">
        <div className="w-[350px] top-1/2 transform  -translate-y-1/2  left-0 h-[300px] bg-grademic-red-800 absolute z-10" />
        <Image
          alt="imagen de persona señalando reseña"
          className="z-30 absolute"
          src="/details.png"
          width={400}
          height={400}
        />
      </div>

      <div className="relative w-[350px] h-[550px]">
        <div className="w-[350px] top-0  left-0 h-[200px] bg-grademic-yellow-600 absolute z-10" />
        <div className="w-[350px] top-[200px]  left-0 h-[300px] bg-grademic-yellow-700 absolute z-10" />
      </div>
    </div>
  );
}

export default SideProfessor;
