import UniversityItem from "@/components/UniversityItem/UniversityItem";
import PageWithNavbar from "@/layout/PageWithNavbar";
import { University } from "@/types/professors";
import { inter, notoSerif } from "@/utils/fonts";
import { searchUniversity } from "@/utils/search";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function SearchPage({ universities }: { universities: University[] }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  return (
    <PageWithNavbar>
      <div className="px-20 py-10">
        <h1 className={`${notoSerif.className} font-bold text-4xl`}>
          Resultados de búsqueda para universidades &ldquo;<span>{query}</span>
          &rdquo;
        </h1>
        <p className={`${inter.className} text-xl`}>
          {universities.length}{" "}
          {universities.length === 1
            ? "universidad encontrada"
            : "universidades encontradas"}{" "}
        </p>

        {universities.length === 0 ? (
          <div className="w-full h-[45vh] flex items-center justify-center">
            <div className="text-center w-1/2 bg-grademic-white-800 p-5">
              <h1 className={`${notoSerif.className} font-bold text-3xl`}>
                Huh, parece que no tenemos ninguna universidad registrada con
                ese nombre
              </h1>
              <p className={`${inter.className} mb-5`}>
                ¡Si tu universidad no esta registrada ayuda a la comunidad de
                Grademic registrandola para los demás!
              </p>
              <Link
                href="/universities/create"
                className="flex items-center justify-center w-full bg-grademic-black-900 text-white rounded-lg py-3"
              >
                <p className={`${notoSerif.className} font-bold text-sm mr-2`}>
                  Registrarla
                </p>{" "}
                <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
        ) : null}

        <div className="mt-10 flex flex-col space-y-5">
          {universities.map((uni) => (
            <UniversityItem university={uni} key={uni.id} />
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

  const universities = await searchUniversity(searchTerm as string);

  if (universities == null) {
    return {
      redirect: {
        permanent: true,
        destination: "/error",
      },
    };
  }
  return {
    props: {
      universities,
    },
  };
};
