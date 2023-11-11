import { Professor, Subject } from "./professors"

export type Review = {
    id: string
    professor: string
    user?: string
    subject: string
    tags?: string[]
    body?: string
    grade_recived: number
    would_take_again: boolean
    quality_rating: number
    difficulty_rating: number
    likes: number
    dislikes: number
    created: string
    updated: string
    expand?: ReviewExpanded
}

export type Tag = {
    id: string
    name: string
    created: string
    updated: string
}

export type ReviewExpanded = {
    professor?: Professor
    subject?: Subject
    user?: GrademicUser
    tags?: Tag[]
}