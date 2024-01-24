import { Review } from "@/types/reviews";
import { notoSerif } from "@/utils/fonts";
import React from "react";
import ReviewComponent from "./ReviewComponent";

function ReviewsProfessor({ reviews }: { reviews: Review[] }) {
  return (
    <div className="flex flex-col mt-5">
      <div className="hidden bg-grademic-green-800" />
      <div className="hidden bg-grademic-red-800" />
      <div className="hidden bg-grademic-yellow-800" />
      <h2 className={`${notoSerif.className} font-bold text-4xl`}>
        {reviews.length} reseñas
      </h2>
      <div className="pb-10 pt-5 pr-5 flex flex-col space-y-5">
        {reviews.map((r) => (
          <div key={r.id} className="lg:h-[300px] lg:w-[90%]">

          <ReviewComponent  review={r}  />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsProfessor;
