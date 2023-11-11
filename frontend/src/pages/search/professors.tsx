import ArrowButton from "@/components/AuthForm/ArrowButton";
import ProfessorItem from "@/components/ProfessorItem.tsx/ProfessorItem";
import PageWithNavbar from "@/layout/PageWithNavbar";
import { ProfessorWithGrade } from "@/types/professorWithGrade";
import { inter, notoSerif } from "@/utils/fonts";
import { searchProfessor } from "@/utils/search";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function SearchPage({ professors }: { professors: ProfessorWithGrade[] }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  return (
    <PageWithNavbar>
      <div className="px-20 py-10">
        <h1 className={`${notoSerif.className} font-bold text-4xl`}>
          Resultados de búsqueda para profesores "<span>{query}</span>"
        </h1>
        <p className={`${inter.className} text-xl`}>
          {professors.length}{" "}
          {professors.length === 1
            ? "profesor encontrado"
            : "profesores encontrados"}{" "}
        </p>

        {professors.length === 0 ? (
          <div className="w-full h-[45vh] flex items-center justify-center">
            <div className="text-center w-1/2 bg-grademic-white-800 p-5">
              <h1 className={`${notoSerif.className} font-bold text-3xl`}>
                Huh, parece que no tenemos ningún profesor registrado
              </h1>
              <p className={`${inter.className} mb-5`}>¡Si tu profesor no esta registrado ayuda a la comunidad de Grademic registrandolo para los demás!</p>
              <Link
                href="/professors/create"
                className="flex items-center justify-center w-full bg-grademic-black-900 text-white rounded-lg py-3"
              >
                <p className={`${notoSerif.className} font-bold text-sm mr-2`}>
                  Registrarlo
                </p>{" "}
                <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
        ) : null}

        <div className="mt-10 flex flex-col space-y-5">
          {professors.map((professor) => (
            <ProfessorItem
              professor={professor}
              bookmarked={false}
              key={professor.id}
            />
          ))}
        </div>
      </div>
    </PageWithNavbar>
  );
}

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;
  const searchTerm = query.query;

  const professors = await searchProfessor(searchTerm as string);

  if (professors == null) {
    return {
      redirect: {
        permanent: true,
        destination: "/error"
      }
    }
  }
  return {
    props: {
      professors,
    },
  };
};
