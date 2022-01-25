type TypePagePromoPropsQuery = {
  readonly programs:
    | {
        title: string | null
        shortDescription: string | null
        study_field: {
          label: string | null
        } | null
        category: {
          type: string
        } | null
        timenprice:
          | {
              studyMonthsDuration: string | null
            }[]
          | null
      }[]
    | null
  // readonly land: unknown
  readonly categories:
    | {
        label: string | null
        type: string | null
      }[]
    | null
}

export default TypePagePromoPropsQuery
