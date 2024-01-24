import ProfessorsInfo from "@/components/ProfessorInfo/ProfessorsInfo";
import ReviewsProfessor from "@/components/ReviewsProfessor/ReviewsProfessor";
import SideProfessor from "@/components/SideProfessor/SideProfessor";
import TopTags from "@/components/TopTags/TopTags";
import PageWithNavbar from "@/layout/PageWithNavbar";
import { ProfessorTopTags } from "@/types/professorTopTags";
import { ProfessorWithGrade } from "@/types/professorWithGrade";
import { Review } from "@/types/reviews";
import { pb } from "@/utils/pocketbase";
import { GetServerSideProps } from "next";
import { ClientResponseError } from "pocketbase";
import React from "react";

export default function ProfessorPage({
  professor,
  reviews,
  topTags,
}: {
  professor: ProfessorWithGrade;
  reviews: Review[];
  topTags: ProfessorTopTags[];
}) {
  return (
    <PageWithNavbar>
      <div className="w-full flex">
        <div className="hidden xl:flex xl:w-[28%]">
          <SideProfessor professor={professor}/>

        </div>
        <div className="w-full px-5 xl:px-0 xl:w-[72%]">
          <ProfessorsInfo professor={professor}/>
          <TopTags tags={topTags}/>
          <ReviewsProfessor reviews={reviews}/>

        </div>
      </div>
    </PageWithNavbar>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query.id as string;
  try {
    const professor: ProfessorWithGrade = await pb
      .collection("professors_with_grades")
      .getOne(id, { expand: "department,department.university" });
    const reviews: Review[] = await pb.collection("reviews").getFullList({
      sort: "created",
      filter: `professor="${id}"`,
      expand: "subject,tags"
    });
    const topTags: ProfessorTopTags[] = (await pb.collection('professor_top_tags').getList(1, 3, {
      fields: "id,tag_id,tag_name,tag_count",
      filter: `professor="${id}"`
    })).items as unknown as ProfessorTopTags[]

    return {
      props: {
        professor,
        reviews,
        topTags
      },
    };
  } catch (error) {
    const client = error as ClientResponseError;

    return {
      notFound: true,
    };
  }

 
};
