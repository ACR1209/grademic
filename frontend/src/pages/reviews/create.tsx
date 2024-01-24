import PageWithNavbar from "@/layout/PageWithNavbar";
import { Professor } from "@/types/professors";
import { notoSerif } from "@/utils/fonts";
import { pb } from "@/utils/pocketbase";
import { searchProfessorById } from "@/utils/search";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import { IoIosClose } from "react-icons/io";
import { FaRegStar, FaStar } from "react-icons/fa";
import StarRating from "@/components/StarComponent/StarRating";
import TagSelector from "@/components/TagSelector/TagSelector";
import { Tag } from "@/types/reviews";
import { FaArrowRight } from "react-icons/fa6";
import { ValidationError } from "@/types/errors";
import { validateReviewData } from "@/utils/review/validateReview";
import { useRouter } from "next/router";
import ErrorWrapper from "@/components/ErrorWrapper/ErrorWrapper";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


function CreateReviewPage() {
  const searchParams = useSearchParams();
  const professorId = searchParams.get("professor");
  const [professorData, setProfessorData] = useState<Professor | undefined>();
  const [selectedSubject, setSelectedSubject] = useState<string>("noopt");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [qualityRating, setQualityRating] = useState<number>(0);
  const [difficultyRating, setDifficultyRating] = useState<number>(0);
  const [wouldTakeAgain, setWouldTakeAgain] = useState<boolean | undefined>(
    undefined
  );
  const [displayGrade, setDisplayGrade] = useState<boolean>(false);
  const [grade, setGrade] = useState<number | undefined>();
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [userReview, setUserReview] = useState<string>("");
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const router = useRouter();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleChangeDisplayGrade() {
    setDisplayGrade((old) => !old);
    setGrade(undefined);
  }

  async function handleSubjectSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subjectName = new FormData(e.currentTarget).get(
      "subjectName"
    ) as string;

    await createSubjectAndAppendToProfessor(subjectName);
    closeModal();
  }

  async function fetchProfessor() {
    if (!professorId) {
      return;
    }
    const record = await searchProfessorById(professorId);

    if (record) {
      setProfessorData(record);
    }
  }

  useEffect(() => {
    fetchProfessor();
  }, [professorId]);

  async function createSubjectAndAppendToProfessor(subjectName: string) {
    try {
      if (!professorId) {
        return;
      }

      const subjectData = {
        name: subjectName.toUpperCase(),
      };

      const subjectRecord = await pb.collection("subjects").create(subjectData);

      const professorUpdateData = {
        "subjects+": subjectRecord.id,
      };

      const professorRecord = await pb
        .collection("professors")
        .update(professorId, professorUpdateData);
      fetchProfessor();
      setSelectedSubject(subjectRecord.id);
    } catch (error) {
      return;
    }
  }

  useEffect(() => {
    if (selectedSubject == "create") {
      openModal();
      setSelectedSubject("noopt");
    }
  }, [selectedSubject]);

  function handleGradeChange(event: ChangeEvent<HTMLInputElement>): void {
    try {
      const parsedGrade = parseFloat(event.target.value);
      if (parsedGrade < 0 || parsedGrade > 20) {
        return;
      }
      setGrade(parsedGrade);
    } catch (error) {}
  }

  function handleUserReviewChange(
    event: ChangeEvent<HTMLTextAreaElement>
  ): void {
    if (event.target.value.trim().length > 500) {
      setUserReview(event.target.value.slice(0, 500));
      return;
    }
    setUserReview(event.target.value);
  }

  async function handleReviewSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errorsObtained = validateReviewData({
      department: selectedSubject,
      difficultyRating: difficultyRating,
      qualityRating: qualityRating,
      selectedTags: selectedTags,
      wouldTakeAgain: wouldTakeAgain,
      writtenReview: userReview,
      gradeRecived: displayGrade ? 0 : grade,
    });

    console.log(errorsObtained);
    if (errorsObtained.length > 0) {
      setErrors(errorsObtained);
      return;
    }

    // TODO: if user put user ID.
    const reviewData = {
      professor: professorId,
      subject: selectedSubject,
      body: userReview,
      grade_received: displayGrade ? -1 : grade,
      would_take_again: wouldTakeAgain,
      quality_rating: qualityRating,
      difficulty_rating: difficultyRating,
      tags: selectedTags.flatMap((t) => t.id),
      likes: 0,
      dislikes: 0,
    };

    const record = await pb.collection("reviews").create(reviewData);
    router.push(`/professors/${professorId}`);
  }

  return (
    <PageWithNavbar>
      <div id="root" className="px-16">
        <h1 className={`${notoSerif.className} font-bold text-5xl`}>
          Reseña al profesor{" "}
          {`${professorData?.firstNames} ${professorData?.lastNames}`}
        </h1>
        <div className="flex flex-col xl:flex-row w-full mt-5 gap-5">
          <div className="xl:w-1/2 w-full flex-col flex">
            <form onSubmit={handleReviewSubmit} className="flex flex-wrap">
              <div className="flex flex-col w-full  space-y-2 p-2">
                <ErrorWrapper errors={errors} name="department">
                  <label className={`${notoSerif.className} font-bold`}>
                    Asignatura
                  </label>
                  <select
                    className="appearance-none w-full bg-white  border-grademic-black-900 border-2 rounded-md px-4 py-2 pr-8 leading-tight focus:outline-none focus:border-grademic-white-600"
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                  >
                    <option
                      disabled
                      selected
                      className="py-2"
                      value={"noopt"}
                      label="Selecciona una clase..."
                    />
                    {professorData?.expand?.subjects?.map((subject) => (
                      <option
                        key={subject.id}
                        className="py-2"
                        value={subject.id}
                        label={subject.name}
                      />
                    ))}
                    <option
                      className="py-2"
                      value={"create"}
                      label="No veo la clase que estoy buscando."
                    />
                  </select>
                </ErrorWrapper>
              </div>

              <div className="flex flex-col w-full xl:w-1/2 space-y-2 p-2">
                <label className={`${notoSerif.className} font-bold`}>
                  Evalua tu profesor en calidad
                </label>
                <StarRating
                  rating={qualityRating}
                  setRating={setQualityRating}
                  totalStars={5}
                />
              </div>
              <div className="flex flex-col w-full xl:w-1/2 space-y-2 p-2">
                <label className={`${notoSerif.className} font-bold`}>
                  Evalua tu profesor en dificultad
                </label>
                <StarRating
                  rating={difficultyRating}
                  setRating={setDifficultyRating}
                  totalStars={5}
                />
              </div>
              <div className="flex flex-col w-full xl:w-1/2 space-y-2 p-2">
                <label className={`${notoSerif.className} font-bold`}>
                  ¿Tomarias clases con este profesor de nuevo?
                </label>
                <div className="flex flex-row space-x-10 mt-2">
                  <label className="flex items-center text-lg">
                    <input
                      type="radio"
                      value="si"
                      className="form-radio h-6 w-6 mr-3 text-blue-500 border-blue-500"
                      checked={wouldTakeAgain === true}
                      onChange={() => setWouldTakeAgain(true)}
                    />
                    Sí
                  </label>

                  <label className="flex items-center text-lg">
                    <input
                      type="radio"
                      value="no"
                      className="form-radio h-6 w-6 mr-3 text-blue-500 border-blue-500"
                      checked={wouldTakeAgain === false}
                      onChange={() => setWouldTakeAgain(false)}
                    />
                    No
                  </label>
                </div>
              </div>

              <div className="flex flex-col w-full xl:w-1/2 space-y-2 p-2">
                <label className={`${notoSerif.className} font-bold`}>
                  Nota recibida
                </label>
                <div className="flex flex-col w-full">
                  <input
                    type="number"
                    value={!displayGrade ? grade : ""}
                    onChange={handleGradeChange}
                    className="border-2 border-black rounded-md px-3 py-2 disabled:bg-gray-200"
                    disabled={displayGrade}
                  />
                  <div className="flex w-full justify-end mt-2">
                    <label className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        checked={displayGrade}
                        onChange={handleChangeDisplayGrade}
                        className="form-checkbox h-4 w-4 text-blue-500 border-blue-500"
                      />
                      <span className="ml-1">Prefiero no decir</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full p-2">
                <label className={`${notoSerif.className} font-bold`}>
                  Etiquetas
                </label>
                <p className="mb-3">
                  Selecciona hasta 3 etiquetas que represente la experiencia en
                  clase con el profesor
                </p>
                <TagSelector
                  selectedTags={selectedTags}
                  setSelectedTags={setSelectedTags}
                />
              </div>
              <div className="flex flex-col w-full p-2">
                <label className={`${notoSerif.className} font-bold`}>
                  Reseña
                </label>
                <textarea
                  name="writtenReview"
                  value={userReview}
                  onChange={handleUserReviewChange}
                  className="border-2 border-black h-36 rounded-lg resize-none px-3 py-2"
                />
                <div className="flex w-full text-sm text-gray-500 justify-end items-center">
                  <p>{userReview.length}/500</p>
                </div>
              </div>

              <div className="flex flex-col w-full p-2">
                <button
                  className={`w-full bg-grademic-black-900 transition-all hover:bg-grademic-black-800 hover:scale-105 text-white py-3 ${notoSerif.className} rounded-lg flex gap-2 items-center justify-center`}
                >
                  Enviar reseña <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
          <div className="w-full xl:w-1/2 flex items-center justify-center">
            <Image
              alt="profesor apuntando a libro"
              src="/makeReview.png"
              width={500}
              height={500}
            />
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="flex flex-row w-full relative mb-5">
            <h2 className={`${notoSerif.className} text-3xl font-bold`}>
              Crear nueva asignatura
            </h2>
            <div className="absolute top-0 right-0 text-3xl ">
              <button className="hover:text-red-500" onClick={closeModal}>
                <IoIosClose />
              </button>
            </div>
          </div>
          <div>
            Agrega la nueva asignatura al profesor{" "}
            {`${professorData?.firstNames} ${professorData?.lastNames}`} para
            ayudar a la comunidad de Grademic:{" "}
          </div>
          <form onSubmit={handleSubjectSubmit} className="mt-3">
            <div>
              <label
                htmlFor="subjectName"
                className={`${notoSerif.className} font-bold`}
              >
                Nombre de la asignatura
              </label>
              <input
                name="subjectName"
                className={`w-full border-2 mt-1 rounded-md px-2 py-2 ${notoSerif.className}`}
              />
            </div>
            <div className="flex justify-end mt-5">
              <button
                className={`px-5 py-3 bg-grademic-yellow-800 hover:bg-grademic-yellow-900 text-white font-bold  rounded-lg ${notoSerif.className}`}
              >
                Crear
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </PageWithNavbar>
  );
}

export default CreateReviewPage;
