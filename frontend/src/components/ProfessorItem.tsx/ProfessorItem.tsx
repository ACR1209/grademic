import { ProfessorWithGrade } from "@/types/professorWithGrade";
import { getColor } from "@/utils/colorPicker";
import { inter, notoSerif } from "@/utils/fonts";
import Link from "next/link";
import React, {MouseEventHandler} from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import MetricItem from "./MetricItem";
import { useRouter } from "next/router";
import ProfessorGrade from "../ProfessorGrade/ProfessorGrade";

function ProfessorItem({
  professor,
  bookmarked,
}: {
  professor: ProfessorWithGrade;
  bookmarked: boolean;
}) {
  const router = useRouter();
  const color = getColor(professor);

  const handleUniversityLinkClick = (event: any) => {
    event.stopPropagation();
  };

  const handleProfessorClick = () => {
    // You can add your redirection logic here when the component is clicked.
    // For example, you can use the `router` to navigate to a specific page.
    router.push(`/professors/${professor.id}`);
  };
  return (
    <div
      className="transition-all w-full border-2 border-grademic-black-900 flex flex-col md:flex-row px-5 py-5 relative cursor-pointer select-none"
        onClick={handleProfessorClick}
    >
      <div className="hidden bg-grademic-green-800" />
      <div className="hidden bg-grademic-red-800" />
      <div className="hidden bg-grademic-yellow-800" />
      <div className="absolute hidden md:flex top-5 right-5 text-xl cursor-pointer ">
        {bookmarked ? <BsBookmarkFill /> : <BsBookmark />}
      </div>
     <ProfessorGrade professor={professor}/>
      <div className="md:pl-8 mt-5 md:mt-0 flex flex-col items-stretch justify-between">
        <div>
          <h2
            className={`${notoSerif.className} font-bold text-xl md:text-2xl`}
          >{`${professor.firstNames} ${professor.lastNames}`}</h2>
          <p className={`w-full text-sm md:text-base md:w-2/3 ${inter.className}`}>
            Profesor {professor.isVerified ? "verificado" : "no verificado"} del departamento de{" "}
            <b className={`${notoSerif.className}`}>
              {professor.expand?.department?.name}
            </b>{" "}
            en{" "}
            <Link
              href={`/university/${professor.expand?.department?.university}`}
              className={`${notoSerif.className} font-bold hover:underline transition-all`}
              onClick={handleUniversityLinkClick}

            >
              {professor.expand?.department?.expand?.university?.name}
            </Link>
          </p>
        </div>
        <hr className="flex md:hidden border-1 mt-5 border-grademic-black-900"></hr>
        <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 md:space-x-5 mt-5 md:mt-0 ">
          
          <MetricItem
            text="lo recomiendan"
            metric={professor.would_take_again_count}
          />
          <div className="md:flex hidden border-r border-gray-900 h-full"></div>

          <MetricItem
            text="de dificultad"
            metric={professor.average_difficulty_rating?.toFixed(1)}
          />
        </div>
      </div>
    </div>

  );
}

export default ProfessorItem;
