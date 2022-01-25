import { TypeLibProgram } from '@/types/index'

type TypePageProgramProps = {
  readonly categories:
    | {
        type?: string
        slug?: string
        label?: string
      }[]
    | null
  readonly programs: TypeLibProgram[] | null
  readonly program: TypeLibProgram | null
}

export default TypePageProgramProps
