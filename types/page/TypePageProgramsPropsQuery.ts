import { TypeLibProgramsCategories, TypeLibPrograms } from '@/types/index'

type TypePageProgramsPropsQuery = {
  readonly categories: TypeLibProgramsCategories | null
  readonly studyFields:
    | {
        type: string | null
        slug: string | null
        title: string | null
      }[]
    | null
  readonly programs: TypeLibPrograms | null
}

export default TypePageProgramsPropsQuery
