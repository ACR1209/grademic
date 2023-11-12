import SelectSearch, { Option } from "@/components/SelectSearch/SelectSearch";
import PageWithNavbar from "@/layout/PageWithNavbar";
import { notoSerif } from "@/utils/fonts";
import { GetServerSideProps } from "next";
import React, { useState } from "react";

function CreateProfessor() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option5", label: "Option 3" },
    { value: "option6", label: "Option 3" },
    { value: "option7", label: "Option 3" },
    { value: "option8", label: "Option 3" },
    { value: "option9", label: "Option 3" },
    { value: "option10", label: "Option 3" },
    // Add more options as needed
  ];
  const [selectedUniversity, setSelectedUniversity] = useState<Option | null>(
    null
  );

  const handleSelectChange = (value: Option | null) => {
    setSelectedUniversity(value);
  };

  
  return (
    <PageWithNavbar>
      <div className="px-10 py-5 w-full">
        <div className="flex flex-col w-1/2">
          <label className={`${notoSerif.className} font-bold`}>Universidad</label>
          <SelectSearch
            options={options}
            onChange={handleSelectChange}
            selectedOption={selectedUniversity}
          />
        </div>
      </div>
    </PageWithNavbar>
  );
}

export default CreateProfessor;

