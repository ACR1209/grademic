import { notoSerif } from "@/utils/fonts";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function ArrowButton({ content }: { content: string }) {
  return (
    <button className="flex items-center justify-center w-full bg-grademic-black-900 text-white rounded-lg py-3">
      <p className={`${notoSerif.className} font-bold text-sm mr-2`}>{content}</p> <AiOutlineArrowRight />
    </button>
  );
}

export default ArrowButton;
