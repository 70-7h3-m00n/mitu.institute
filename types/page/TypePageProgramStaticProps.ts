import { TypeLibProgram } from '@/types/index'

type TypePageProgramStaticProps = {
  readonly categories?: {
    type?: string
    slug?: string
    label?: string
  }[]
  readonly programs?: TypeLibProgram[] | null
  readonly program?: TypeLibProgram | null
  readonly gspContextParamsCategory: string | string[] | null
  readonly gspContextParamsStudyField: string | string[] | null
  readonly gspContextParamsProgram: string | string[] | null
}

export default TypePageProgramStaticProps
