import {
  TypeLibProgramsCategories,
  TypeLibProgramQuestions
} from '@/types/index'

type TypePagePromoPropsQuery = {
  readonly programs:
    | {
        title: string | null
        shortDescription: string | null
        slug: string | null
        study_field: {
          slug: string | null
          type: string | null
          label: string | null
        } | null
        category: {
          slug: string | null
          type: string | null
          label: string | null
        } | null
        timenprice:
          | {
              studyMonthsDuration: string | null
            }[]
          | null
      }[]
    | null
  // readonly land: unknown
  readonly categories: TypeLibProgramsCategories | null
  readonly questions: TypeLibProgramQuestions
}

export default TypePagePromoPropsQuery
