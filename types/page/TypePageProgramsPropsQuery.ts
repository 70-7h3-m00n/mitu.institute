type TypePageProgramsPropsQuery = {
  readonly categories:
    | {
        type?: string
        slug?: string
        label?: string
      }[]
    | null
  readonly studyFields:
    | {
        type?: string
        slug?: string
        title?: string
      }[]
    | null
  readonly programs:
    | {
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
    | null
}

export default TypePageProgramsPropsQuery
