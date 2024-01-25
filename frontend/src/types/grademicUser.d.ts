import { ProfessorWithGrade } from "./professorWithGrade"
import { Professor } from "./professors"

export type GrademicUser = {
    id: string
    email: string
    likedProfessors?: string[]
    created: string
    updated: string
}