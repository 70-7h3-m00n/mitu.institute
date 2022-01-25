type TypePagePromoPropsQuery = {
  readonly programs:
    | {
        title?: string
        shortDescription?: string
        study_field?: {
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
  // readonly land?: unknown
  readonly categories:
    | {
        label?: string
        type?: string
      }[]
    | null
}

export default TypePagePromoPropsQuery
