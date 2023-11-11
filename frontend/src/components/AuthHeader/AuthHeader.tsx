import { inter, notoSerif } from "@/utils/fonts";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

function AuthHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col">
      <Link
        href="/"
        className="text-xl md:text-3xl w-fit cursor-pointer hover:scale-110 transition-all flex items-center justify-start mb-2"
      >
        <AiOutlineArrowLeft />
        <p className={`${notoSerif.className}`}>Volver</p>
      </Link>
      <h1 className={`${notoSerif.className} text-4xl md:text-6xl font-bold w-2/3`}>
        {title}
      </h1>
      <p className={`${inter.className} mt-2 md:mt-0 w-5/6`}>{subtitle}</p>
    </div>
  );
}

export default AuthHeader;
