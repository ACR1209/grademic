import ArrowButton from "@/components/AuthForm/ArrowButton";
import SelectSearch, { Option } from "@/components/SelectSearch/SelectSearch";
import PageWithNavbar from "@/layout/PageWithNavbar";
import { ProfessorCreate } from "@/types/professorCreate";
import { Department } from "@/types/professors";
import { getDepartmentsFromUniversity } from "@/utils/departments";
import { inter, notoSerif } from "@/utils/fonts";
import { pb } from "@/utils/pocketbase";
import { validateProfessorCreate } from "@/utils/professor/validate";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function CreateProfessor() {
  const [selectedUniversity, setSelectedUniversity] = useState<Option | null>(
    null
  );
  const [departments, setDepartments] = useState<Department[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("noopt");
  const [firstNames, setFirstNames] = useState<string>("");
  const [lastNames, setLastNames] = useState<string>("");
  const [proof, setProof] = useState<string>("")
  const [errors, setErrors] = useState<string[]>([])
  const router = useRouter()

  const handleUniversityChange = (value: Option | null) => {
    setSelectedUniversity(value);
    setSelectedDepartment("noopt");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const prof: ProfessorCreate = {
      department: selectedDepartment,
      firstNames: firstNames,
      lastNames: lastNames,
      proof: proof,
      isVerified: false
    }
    const err = validateProfessorCreate(prof)

    console.log("gere")
    if (err.length > 0) {
      setErrors(err)
      //TODO: Show errors to user
      return
    }

    try {
      const record = await pb.collection('professors').create(prof);
      if (record) {
        router.push(`/professors/${record.id}`)
      }
    } catch (error) {
      console.error(`Error creating professor: ${error}`)      
    }


  };

  useEffect(() => {
    if (selectedUniversity == null) {
      setDepartments([]);
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
      <div className="px-10 py-5 w-full flex xl:flex-row-reverse flex-col-reverse">
        <div className="w-full xl:w-1/2 flex items-center justify-center">
          <Image
            alt="profesor apuntando a libro"
            src="/registerTeacherWBackground.png"
            width={500}
            height={500}
          />
        </div>
        <form onSubmit={handleSubmit} className="xl:w-1/2 w-full flex-col flex">
          <h1 className={`${notoSerif.className} font-bold text-6xl mb-10`}>
            Agregar profesor
          </h1>

          <div className="bg-grademic-white-800 w-full  p-5 mb-5">
            <p className={`${inter.className}`}>
              Recuerda que el profesor que registres pasa por un periodo de
              verificación a manos del equipo de Grademic, así que completalo
              con la mayor precisión posible.
            </p>
          </div>
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col w-full  space-y-2">
              <label className={`${notoSerif.className} font-bold`}>
                Universidad
              </label>
              <SelectSearch
                onChange={handleUniversityChange}
                selectedOption={selectedUniversity}
              />
            </div>
            <div className="flex flex-col w-full  space-y-2">
              <label className={`${notoSerif.className} font-bold`}>
                Departamento
              </label>
              <select
                className="appearance-none w-full bg-white  border-grademic-black-900 border-2 rounded-md px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-grademic-white-600"
                disabled={departments.length === 0}
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option
                  disabled
                  selected
                  className="py-2"
                  value={"noopt"}
                  label={
                    selectedUniversity
                      ? "Selecciona un departamento..."
                      : "Selecciona una universidad primero"
                  }
                />
                {departments.map((d) => (
                  <option
                    className="py-2"
                    key={d.id}
                    value={d.id}
                    label={d.name}
                  />
                ))}
              </select>
            </div>

            <div className="flex flex-col w-full space-y-2">
              <label className={`${notoSerif.className} font-bold`}>
                Nombres
              </label>
              <input
                type="text"
                value={firstNames}
                onChange={(e) => setFirstNames(e.target.value)}
                placeholder="Nombres de tu profesor..."
                className="appearance-none w-full bg-white  border-grademic-black-900 border-2 rounded-md px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-grademic-white-600"
              />
            </div>
            <div className="flex flex-col w-full space-y-2">
              <label className={`${notoSerif.className} font-bold`}>
                Apellidos
              </label>
              <input
                type="text"
                value={lastNames}
                onChange={(e) => setLastNames(e.target.value)}
                placeholder="Apellidos de tu profesor..."
                className="appearance-none w-full bg-white  border-grademic-black-900 border-2 rounded-md px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-grademic-white-600"
              />
            </div>
            <div className="flex flex-col w-full space-y-2">
              <div className="flex items-center">
                <label className={`${notoSerif.className} font-bold`}>
                  Manera de verificación
                </label>
                <div className="bg-grademic-black-900 px-2 ml-3 select-none rounded-full relative group">
                  <p className={`${notoSerif.className} font-bold text-white`}>
                    ?
                  </p>
                  <div className="tooltip absolute w-[300px]  bg-grademic-black-800 text-white text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Proporciona alguna manera de comprobar que tu profesor
                    pertenece a la universidad a la que dices, algunos métodos
                    son: los directorios de profesores, LinkedIn de tu profesor,
                    etc.
                  </div>
                </div>
              </div>
              <input
                type="text"
                value={proof}
                onChange={(e) => setProof(e.target.value)}
                placeholder="URL de verificación..."
                className="appearance-none w-full bg-white  border-grademic-black-900 border-2 rounded-md px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-grademic-white-600"
              />
            </div>
            <div className="flex flex-col w-full space-y-2">
              <ArrowButton content="Registrar profesor" />
            </div>
          </div>
        </form>
      </div>
    </PageWithNavbar>
  );
}

export default CreateProfessor;
