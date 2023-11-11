import { ProfessorWithGrade } from "@/types/professorWithGrade";

const colorThresholds = {
  red: 1.67,
  yellow: 3.35,
};

export const getColor = (professor: ProfessorWithGrade) => {
  if (professor.n_reviews === 0) {
    return "grademic-black-900";
  }

  const averageQualityRating = professor.average_quality_rating || 0; // Handle null or undefined values
  let color;

  switch (true) {
    case averageQualityRating >= colorThresholds.yellow:
      color = "grademic-green-800";
      break;
    case averageQualityRating >= colorThresholds.red:
      color = "grademic-yellow-800";
      break;
    default:
      color = "grademic-red-800";
  }
  return color;
};

export const getColorFromRating = (rating: number) => {


  const averageQualityRating = rating; // Handle null or undefined values
  let color;

  switch (true) {
    case averageQualityRating >= colorThresholds.yellow:
      color = "grademic-green-800";
      break;
    case averageQualityRating >= colorThresholds.red:
      color = "grademic-yellow-800";
      break;
    default:
      color = "grademic-red-800";
  }
  return color;
};

