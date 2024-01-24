import { Review } from "@/types/reviews";
import { getColorFromRating } from "@/utils/colorPicker";
import { inter, notoSerif } from "@/utils/fonts";
import React from "react";
import Likes from "./Likes";
import Tags from "../TopTags/Tags";

function ReviewComponent({ review }: { review: Review }) {
  const color = getColorFromRating(review.quality_rating);
  return (
    <div className="flex flex-col lg:flex-row flex-grow border-2 border-grademic-black-900 py-5 px-8 h-full w-full">
      <div className="w-fit flex flex-row lg:flex-col  px-2 space-x-3 lg:space-x-0 lg:space-y-3 h-fit">
        <div className="flex items-center justify-center flex-col">
          <p className={`${notoSerif.className}  font-bold`}>CALIDAD</p>
          <div
            className={`bg-${color} font-bold w-[100px] flex items-center justify-center h-[100px] ${notoSerif.className}`}
          >
            <p className="text-6xl">{review.quality_rating.toFixed(1)}</p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className={`${notoSerif.className} font-bold`}>DIFICULTAD</p>
          <div
            className={`bg-grademic-black-900 text-white font-bold w-[100px] flex items-center justify-center h-[100px] ${notoSerif.className}`}
          >
            <p className="text-6xl">{review.difficulty_rating}</p>
          </div>
        </div>
      </div>

      <div className="h-full w-full flex lg:pl-5 mt-5 lg:mt-0 items-stretch flex-col">
        <div className="flex-grow">
          <h3 className={`${notoSerif.className} font-bold text-2xl`}>
            {review.expand?.subject?.name}
          </h3>
          <div className="flex flex-wrap mb-3">
            {review?.expand?.tags?.map((t, i) => (
              <div className={`p-1`} key={`${review.id}-${t.id}`}>
                <Tags tag={t.name} />
              </div>
            ))}
          </div>
          <p className={`${inter.className}`}>{review.body}</p>
        </div>
        <div className="flex flex-row justify-between w-full lg:mt-0 mt-5">
          <Likes dislikes={review.dislikes} likes={review.likes} />
          <p>{new Date(review.created).toLocaleDateString("es-ES")}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewComponent;
