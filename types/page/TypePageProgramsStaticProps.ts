type TypePageProgramsStaticProps = {
  readonly categories?: {
    type?: string
    slug?: string
    label?: string
  }[]
  readonly studyFields: {
    type?: string
    slug?: string
    title?: string
  }[]
  readonly programs?: {
    title?: string
    shortDescription?: string
    slug?: string
    study_field?: {
      type?: string
      label?: string
    }
    category?: {
      type?: string
    }
    timenprice?: {
      studyMonthsDuration?: string
    }[]
  }[]
  readonly gspContextParamsCategory: string | string[] | null
  readonly gspContextParamsStudyField: string | string[] | null
}

export default TypePageProgramsStaticProps
