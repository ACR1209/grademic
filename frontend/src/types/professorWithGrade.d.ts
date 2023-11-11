import { ProfessorExpanded } from "./professors"

export type ProfessorWithGrade = {
    id: string
    firstNames: string
    lastNames: string
    department: string
    subjects?: string[]
    average_quality_rating?: number
    average_difficulty_rating?: number
    n_reviews?: number
    would_take_again_count?: number
    isVerified: boolean
    created: string
    updated: string
    expand?: ProfessorExpanded
}
