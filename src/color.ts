import { NameSlugRequired } from "./primitives"
export interface Duotone extends NameSlugRequired {
    colors: Array<string>
}

export interface Gradient extends NameSlugRequired  {
    gradient: string
}

export interface Color extends NameSlugRequired {
    color: string
}