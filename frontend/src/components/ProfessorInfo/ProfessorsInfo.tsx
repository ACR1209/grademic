import { ProfessorWithGrade } from "@/types/professorWithGrade";
import { getColor } from "@/utils/colorPicker";
import { inter, notoSerif } from "@/utils/fonts";
import Link from "next/link";
import React from "react";
import ProfessorGrade from "../ProfessorGrade/ProfessorGrade";
import MetricItem from "../ProfessorItem.tsx/MetricItem";

function ProfessorsInfo({ professor }: { professor: ProfessorWithGrade }) {
  const color = getColor(professor);

  return (
    <div className="flex md:flex-row flex-col">
      <div className="flex flex-row items-end space-x-4 md:space-x-0 md:items-start md:flex-col md:mb-0 mb-10 md:mr-10">
        <ProfessorGrade professor={professor} />
        <div className="md:flex md:items-center md:justify-center md:flex-col md:w-full">
          <MetricItem
            text="lo recomiendan"
            metric={professor.would_take_again_count}
          />
          <MetricItem
            text="de dificultad"
            metric={professor.average_difficulty_rating?.toFixed(1)}
          />
        </div>
      </div>
      <div className="flex flex-col justify-start md:justify-between items-start md:items-stretch ">
        <div>
          <h1 className={`${notoSerif.className} font-bold text-4xl md:text-6xl md:w-2/3 w-full`}>
            {professor.firstNames} {professor.lastNames}
          </h1>
          <p
            className={`w-full text-sm md:text-base md:w-2/3 ${inter.className}`}
          >
            Profesor del departamento de{" "}
            <b className={`${notoSerif.className}`}>
              {professor.expand?.department?.name}
            </b>{" "}
            en{" "}
            <Link
              href={`/university/${professor.expand?.department?.university}`}
              className={`${notoSerif.className} font-bold hover:underline transition-all`}
            >
              {professor.expand?.department?.expand?.university?.name}
            </Link>
          </p>
        </div>
        <Link
          className={`${notoSerif.className} font-bold text-white md:mt-0 mt-10 px-5 py-2 bg-grademic-black-900 rounded-full w-fit transition-all`}
          href={`/reviews/create?professor=${professor.id}`}
        >
          <p>Dejar una reseña al profesor {professor.firstNames}</p>
        </Link>
      </div>
    </div>
  );
}

export default ProfessorsInfo;
