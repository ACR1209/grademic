import { ValidationError } from "@/types/errors";
import { ReviewData } from "@/types/reviews";



export function validateReviewData(reviewData: ReviewData): ValidationError[] {
    let errors: ValidationError[] = [];

    if (reviewData.department.trim().length < 0 || ["noopt", "create"].includes(reviewData.department)) {
        errors.push({field: "department", label: "Inserte un departamento válido."})
    }

    if (reviewData.difficultyRating < 1 || reviewData.difficultyRating > 5) {
        errors.push({field: "difficultyRating", label: "La dificultad debe estar entre 1 y 5."})
    }

    if (reviewData.qualityRating < 1 || reviewData.qualityRating > 5) {
        errors.push({field: "qualityRating", label: "La calidad debe estar entre 1 y 5."})
    }

    if (reviewData.gradeRecived && (reviewData.gradeRecived < 0 || reviewData.gradeRecived > 20)) {
        errors.push({field: "gradeRecived", label: "La nota solo puede estar en el rango de 0 a 20"});
    }

    if (reviewData.selectedTags.length < 1 || reviewData.selectedTags.length > 3) {
        errors.push({field: "selectedTags", label: "Seleccione al menos una etiqueta. Max. 3 etiquetas."});
    }

    if (reviewData.writtenReview.trim().length > 500) {
        errors.push({field: "writtenReview", label: "La reseña puede contener máximo 500 caracteres."})
    }

    if (reviewData.wouldTakeAgain === undefined ) {
        errors.push({field: "wouldTakeAgain", label: "Debe seleccionar si lo tomarias de nuevo."});
    }

    return errors;
}