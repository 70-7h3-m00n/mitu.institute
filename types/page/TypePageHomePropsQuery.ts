import {
  TypeLibProgramsCategories,
  TypeLibProgramQuestions,
  TypeLibPrograms
} from '@/types/index'

type TypePageHomePropsQuery = {
  readonly categories: TypeLibProgramsCategories | null
  readonly questions: TypeLibProgramQuestions | null
  readonly programs: TypeLibPrograms | null
}

export default TypePageHomePropsQuery
