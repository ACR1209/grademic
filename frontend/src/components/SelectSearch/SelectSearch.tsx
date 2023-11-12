// components/SelectSearch.tsx
import { University } from "@/types/professors";
import { searchUniversityWithLimit } from "@/utils/search";
import Link from "next/link";
import { useState, ChangeEvent, FC } from "react";
import { AiOutlineClose } from "react-icons/ai";

export interface Option {
  value: string;
  label: string;
}

interface SelectSearchProps {
  options?: Option[];
  selectedOption: Option | null;
  onChange: (value: Option | null) => void;
}

const SelectSearch: FC<SelectSearchProps> = ({
  options,
  onChange,
  selectedOption,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);

  const universitiesToOption = (universities: University[]) => {
    return universities.map((u) => ({value: u.id, label: `${u.name}, ${u.expand?.state?.name}, ${u.expand?.state?.expand?.country?.name}`}))
  }

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setLoading(true)
    const universities = await searchUniversityWithLimit(searchTerm, 5)
    
    console.log(universities)
    if (!universities) {
        setLoading(false)
        return
    }

    setFilteredOptions(universitiesToOption(universities))
    setIsOpen(true);
  };

  const handleOptionClick = (value: Option) => {
    onChange(value);
    setSearchTerm("");
    setIsOpen(false);
  };

  const handleClearClick = () => {
    onChange(null);
  };

  return (
    <div
      className="relative inline-block w-full"
      onBlur={() => setTimeout(() => setIsOpen(false), 1000)}
    >
      <input
        type="text"
        value={selectedOption !== null ? selectedOption.label : searchTerm}
        onChange={handleInputChange}
        placeholder="Buscar tu universidad..."
        disabled={selectedOption !== null}
        className="appearance-none w-full bg-white  border-grademic-black-900 border-2 rounded-md px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-grademic-white-600"
      />

      {selectedOption && (
        <div
          onClick={() => handleClearClick()}
          className="absolute top-3 right-3"
        >
          <AiOutlineClose />
        </div>
      )}

      {isOpen && (
        <div className="absolute left-0 mt-1 w-full bg-white border z-50 border-gray-300 rounded-md shadow-md">
          {filteredOptions?.length > 0 ? (
            filteredOptions?.map((option) => (
              <div
                key={option.value}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))
          ) : loading ? (
            <div className="px-4 py-2 text-gray-500">
              <p>No existe esa universidad en nuestro sistema.</p>
              <Link
                className="font-bold hover:underline"
                href={`/universities/create`}
              >
                Agregar universidad
              </Link>
            </div>
          ) : (
            <div className="px-4 py-2 text-gray-500">
              <p>Cargando...</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectSearch;
