import SelectSearch, { Option } from "@/components/SelectSearch/SelectSearch";
import PageWithNavbar from "@/layout/PageWithNavbar";
import { Department } from "@/types/professors";
import { getDepartmentsFromUniversity } from "@/utils/departments";
import { notoSerif } from "@/utils/fonts";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";

function CreateProfessor() {
  const [selectedUniversity, setSelectedUniversity] = useState<Option | null>(
    null
  );
  const [departments, setDepartments] = useState<Department[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("noopt")

  const handleUniversityChange = (value: Option | null) => {
    setSelectedUniversity(value);
    setSelectedDepartment("noopt");

  };

  useEffect(() => {
    if (selectedUniversity == null) {
      setDepartments([])
      return;
    }

    getDepartmentsFromUniversity(selectedUniversity.value).then((res) => {
      if (!res) {
        return;
      }

      setDepartments(res);
    });
  }, [selectedUniversity]);

  return (
    <PageWithNavbar>
      <div className="px-10 py-5 w-full">
        <div className="flex flex-col space-y-3">

        <div className="flex flex-col w-1/2">
          <label className={`${notoSerif.className} font-bold`}>
            Universidad
          </label>
          <SelectSearch
            onChange={handleUniversityChange}
            selectedOption={selectedUniversity}
          />
        </div>
        <div className="flex flex-col w-1/2 ">
          <label className={`${notoSerif.className} font-bold`}>
            Departamento
          </label>
          <select
                  className="appearance-none w-full bg-white  border-grademic-black-900 border-2 rounded-md px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-grademic-white-600"
              disabled={departments.length === 0}
              value={selectedDepartment }
              onChange={(e)=>setSelectedDepartment(e.target.value)}
          >
            <option disabled selected className="py-2"  value={"noopt"} label={selectedUniversity ? "Selecciona un departamento..." : "Selecciona una universidad primero."}/>
            {
              departments.map((d)=>(
                <option className="py-2" key={d.id} value={d.id} label={d.name}/>
              ))
            }
          </select>
        </div>
        </div>

      </div>
    </PageWithNavbar>
  );
}

export default CreateProfessor;
