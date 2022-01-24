import { TypeProgramCategory } from '@/types/index'

type TypePagePromoStaticProps = {
  readonly programs?: {
    title?: string
    shortDescription?: string
    study_field?: {
      label?: string
    }
    category?: {
      type?: TypeProgramCategory
    }
    timenprice?: {
      studyMonthsDuration?: string
    }[]
  }
  // readonly land?: unknown
  readonly categories?: {
    label?: string
    type?: string
  }[]
}

export default TypePagePromoStaticProps
