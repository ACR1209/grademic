import { ProfessorWithGrade } from "@/types/professorWithGrade";
import { getColor } from "@/utils/colorPicker";
import { notoSerif } from "@/utils/fonts";
import React from "react";

function ProfessorGrade({ professor }: { professor: ProfessorWithGrade }) {
  const color = getColor(professor);

  return (
    <div className="select-none">
      <div className="hidden bg-grademic-green-800" />
      <div className="hidden bg-grademic-red-800" />
      <div className="hidden bg-grademic-yellow-800" />
      <div
        className={`${notoSerif.className} font-bold bg-${color} ${
          color === "grademic-black-900" ? "text-grademic-white-900" : ""
        } w-full md:w-[200px] h-[200px] px-3 py-8 flex items-center flex-col justify-center`}
      >
        <h1 className="text-8xl">
          {professor.average_quality_rating
            ? professor.average_quality_rating.toFixed(1)
            : "N/A"}
        </h1>
        <p className="text-sm">
          {professor.n_reviews}{" "}
          {professor.n_reviews === 1 ? "reseña" : "reseñas"}
        </p>
      </div>
    </div>
  );
}

export default ProfessorGrade;
