import { TypePageProgramsStaticPaths } from '@/types/index'

type TypePageStudyFieldStaticPaths = {
  readonly programs: {
    readonly category?: {
      slug?: string
    }
    readonly study_field?: {
      slug?: string
    }
    slug?: string
  }[]
}

export default TypePageStudyFieldStaticPaths
