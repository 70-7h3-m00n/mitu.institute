import { TypePageProgramsPropsQuery } from '@/types/index'

type TypePageProgramsProps = TypePageProgramsPropsQuery & {
  readonly gspContextParamsCategory: string | null
  readonly gspContextParamsStudyField: string | null
}

export default TypePageProgramsProps
