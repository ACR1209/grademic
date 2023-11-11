import { inter, notoSerif } from "@/utils/fonts";
import React, { FormEvent, useState } from "react";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";

function SearchBar() {
  const [currentSearch, setCurrentSearch] = useState<
    "Profesores" | "Universidades"
  >("Profesores");
  const [query, setQuery] = useState<string>("");
  const router = useRouter()
  const [errorSearch, setErrorSearch] = useState<string|null>(null)
  const inputClass = errorSearch
  ? "border-grademic-red-900 aria-selected:border-grademic-red-900 focus:border-grademic-red-900 focus:outline-none"
  : "border-grademic-black-900 aria-selected:border-grademic-black-900 focus:border-grademic-black-900";

  async function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (query.trim().length < 3) {
      if (!errorSearch) {
        setErrorSearch("Ingresa un nombre de al menos 3 cáracteres ")
        setTimeout(() => {
          setErrorSearch(null)
        }, 3000);
      }
      return 
    }

    const val = query
    setQuery("")
    switch (currentSearch) {
      case "Profesores":
        router.push(`/search/professors?query=${val}`)
        break;
      case "Universidades":
        router.push(`/search/universities?query=${val}`)
      default:
        break;
    }
  }

  return (
    <form onSubmit={handleSearch}>
      <div className="flex items-center space-x-2">
        <p className={`${inter.className} text-sm`}>Estoy buscando </p>
        <div
          onClick={() => {
            setCurrentSearch(
              currentSearch === "Profesores" ? "Universidades" : "Profesores"
            );
          }}
          className="flex  items-center  space-x-1 transition-all select-none"
        >
          <span
            className={`${notoSerif.className} font-bold text-sm cursor-pointer flex items-center `}
          >
            {currentSearch}
          </span>
          <LiaExchangeAltSolid />
        </div>
      </div>
      <div className="relative">
        <div>

        <input
          type="text"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
          placeholder="Buscar..."
          className={`border-2 rounded-lg ${inputClass}  px-2 py-2 w-full`}
        />
       
        </div>

        <button className={`${errorSearch ? "bg-grademic-red-800" : "bg-grademic-black-900"} text-white w-fit p-2 rounded-lg absolute top-1/2 right-1 transform -translate-y-1/2`}>
          <AiOutlineSearch />
        </button>
      </div>
      {
          errorSearch && (
            <p className={`${notoSerif.className} font-bold text-grademic-red-900`}>{errorSearch}</p>
          )
        }
    </form>
  );
}

export default SearchBar;
