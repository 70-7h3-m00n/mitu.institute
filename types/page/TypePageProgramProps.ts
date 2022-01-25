import { TypePageProgramPropsQuery } from '@/types/index'

type TypePageProgramProps = TypePageProgramPropsQuery & {
  readonly gspContextParamsCategory: string | null
  readonly gspContextParamsStudyField: string | null
  readonly gspContextParamsProgram: string | null
}

export default TypePageProgramProps
