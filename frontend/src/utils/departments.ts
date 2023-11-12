import { Department, University } from "@/types/professors";
import { pb } from "./pocketbase";

export async function getDepartmentsFromUniversity(universityId: string): Promise<Department[] | null> {
    try {
        const records = await pb
          .collection("departments")
          .getFullList<Department>({
            filter: `university = '${universityId}'`,
          });
        return records;
      } catch (error) {
        console.error("Error while fetching departments: " + error);
        return null;
      }
}