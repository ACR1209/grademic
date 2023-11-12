import SelectSearch, { Option } from "@/components/SelectSearch/SelectSearch";
import PageWithNavbar from "@/layout/PageWithNavbar";
import { notoSerif } from "@/utils/fonts";
import { GetServerSideProps } from "next";
import React, { useState } from "react";

function CreateProfessor() {

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
            onChange={handleSelectChange}
            selectedOption={selectedUniversity}
          />
        </div>
      </div>
    </PageWithNavbar>
  );
}

export default CreateProfessor;

