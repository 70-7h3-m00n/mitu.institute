import { TypeLibProgram, TypeLibProgramsCategories } from '@/types/index'

type TypePageProgramProps = {
  readonly categories: TypeLibProgramsCategories | null
  readonly programs: TypeLibProgram[] | null
  readonly program: TypeLibProgram | null
}

export default TypePageProgramProps
