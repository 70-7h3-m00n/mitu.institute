import { TypeProgramCategory, TypeProgram } from '@/types/index'

type TypePageProgramStaticProps = {
  readonly categories?: {
    type?: TypeProgramCategory
    slug?: string
    label?: string
  }[]
  readonly programs?: TypeProgram[] | null
  readonly program?: TypeProgram | null
  readonly gspContextParamsCategory: string | string[] | null
  readonly gspContextParamsStudyField: string | string[] | null
  readonly gspContextParamsProgram: string | string[] | null
}

export default TypePageProgramStaticProps
