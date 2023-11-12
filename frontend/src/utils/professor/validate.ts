import { ProfessorCreate } from "@/types/professorCreate";

const isValidLatinAmericanName = (name: string): boolean => {
    const latinAmericanNameRegex = /^[A-Za-z\u00C0-\u024F\s]+$/;
    return latinAmericanNameRegex.test(name);
};

const isValidURL = (url: string): boolean => {
 
  return /^https?:\/\//.test(url);
};

const isValidDepartment = (department: string): boolean => {
  return department.trim().length > 0;
};

export const validateProfessorCreate = (
  professor: ProfessorCreate
): string[] => {
  const errors: string[] = [];

  if (!isValidLatinAmericanName(professor.firstNames)) {
    errors.push("firstNames.");
  }

  if (!isValidLatinAmericanName(professor.lastNames)) {
    errors.push("lastNames");
  }

  if (!isValidURL(professor.proof)) {
    errors.push("proof");
  }

  if (!isValidDepartment(professor.department)) {
    errors.push("department");
  }

  return errors;
};
