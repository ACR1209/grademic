import { ProfessorWithGrade } from "@/types/professorWithGrade";
import { pb } from "./pocketbase";
import { Professor, University } from "@/types/professors";

export async function searchProfessor(
  query: string
): Promise<ProfessorWithGrade[] | null> {
  try {
    const records = await pb
      .collection("professors_with_grades")
      .getFullList<ProfessorWithGrade>({
        filter: `(firstNames ~ '${query
          .trim()
          .toLowerCase()}' || lastNames ~ '${query.trim().toLowerCase()}')`,
        expand: "department,department.university",
      });
    return records;
  } catch (error) {
    console.error("Error while fetching professor: " + error);
    return null;
  }
}

export async function searchUniversity(
  query: string
): Promise<University[] | null> {
  try {
    const records = await pb
      .collection("universities")
      .getFullList<University>({
        filter: `name ~ '${query.trim().toLowerCase()}'`,
      });
    return records;
  } catch (error) {
    console.error("Error while fetching professor: " + error);
    return null;
  }
}

export async function searchUniversityWithLimit(
  query: string,
  limit: number
): Promise<University[] | null> {
  try {
    const records = (
      await pb.collection("universities").getList<University>(1, limit, {
        filter: `name ~ '${query.trim().toLowerCase()}'`,
        expand: "state,state.country",
      })
    ).items;
    return records;
  } catch (error) {
    console.error("Error while fetching university: " + error);
    return null;
  }
}

export async function searchProfessorById(id: string) {
  try {
    const record = await pb.collection("professors").getOne<Professor>(id, {
      expand: "department,department.university,subjects",
    });

    if (!record) {
      return null;
    }
    return record;
  } catch (error) {
    console.error("Erro while fetching professor: " + error)
    return null;
  }
}
