import { University } from "@/types/professors";
import { inter, notoSerif } from "@/utils/fonts";
import { pb } from "@/utils/pocketbase";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function UniversityItem({ university }: { university: University }) {
  const [numberProfessors, setNumberProfessors] = useState<number>(0);

  async function getProfessorQuantities() {
    try {
      const resultList = await pb.collection("professors").getList(1, 1, {
        filter: `department.university = '${university.id}'`,
      });

      setNumberProfessors(resultList.totalItems);
    } catch (error) {
        console.error(error)
    }
  }

  useEffect(() => {
    getProfessorQuantities();
  }, []);

  return (
    <div className="flex flex-col w-full border-2 border-black px-10 py-5">
      <Link href={`/universities/${university.id}`}>
        <h3 className={`${notoSerif.className} font-bold text-xl md:text-3xl`}>
          {university.name}
        </h3>
        <p className={`${inter.className}`}>
          Universidad en {university.city}, {university.expand?.state?.name},{" "}
          {university.expand?.state?.expand?.country?.name}
        </p>
        <p className={`${inter.className} mt-5 font-bold`}>Profesores registrados: {numberProfessors}</p>
      </Link>
    </div>
  );
}

export default UniversityItem;
