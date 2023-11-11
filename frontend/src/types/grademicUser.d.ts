import { ProfessorWithGrade } from "./professorWithGrade"
import { Professor } from "./professors"

export type GrademicUser = {
    id: string
    email: string
    likedProfessors?: Professor
    created: string
    updated: string
}