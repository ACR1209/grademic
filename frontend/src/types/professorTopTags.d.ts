import { Professor } from "./professors"

export type ProfessorTopTags = {
    id: string
    professor?: string
    tag_id?: string
    tag_name: string
    tag_count: number
    expand?: ProfessorTopTagsExpand 
}

export type ProfessorTopTagsExpand = {
    professor?: Professor
}