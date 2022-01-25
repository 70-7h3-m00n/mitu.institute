import { TypeLibProgram } from '@/types/index'

type TypePageProgramProps = {
  readonly categories:
    | {
        type: string | null
        slug: string | null
        label: string | null
      }[]
    | null
  readonly programs: TypeLibProgram[] | null
  readonly program: TypeLibProgram | null
}

export default TypePageProgramProps
