import { notoSerif } from "@/utils/fonts";
import React from "react";

function Tags({ tag, count }: { tag: string; count?: number }) {
  return (
    <div
      className={`px-5 py-1  bg-grademic-white-800 ${notoSerif.className} font-bold rounded-full w-fit select-none`}
    >
      {count ? `${count} |` : ""}  {tag}
    </div>
  );
}

export default Tags;
