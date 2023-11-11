export type Professor = {
    id: string
    firstNames: string
    lastNames: string
    department: string
    subjects?: string[]
    created: string
    updated: string
    expand?: ProfessorExpanded
}

export type ProfessorExpanded = {
    department?: Department
    subjects?: Subject[]
}

export type Department = {
    id: string
    university: string
    name: string
    created: string
    updated: string
    expand?: DepartmentExpanded
}

export type DepartmentExpanded = {
    university?: University
}

export type University = {
    id: string
    name: string
    state: string
    city: string
    created: string
    updated: string
    expand?: UniversityExpanded
}

export type UniversityExpanded = {
    state?: State
}

export type State = {
    id: string
    name: string
    country: string
    created: string
    updated: string
    expand?: StateExpanded
}

export type StateExpanded = {
    country?: Country
}

export type Country = {
    id: string
    name: string
    created: string
    updated: string
}

export type Subject = {
    id: string
    name: string
    created: string
    updated: string
}