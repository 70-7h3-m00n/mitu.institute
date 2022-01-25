type TypePageProgramsPropsQuery = {
  readonly categories:
    | {
        type: string | null
        slug: string | null
        label: string | null
      }[]
    | null
  readonly studyFields:
    | {
        type: string | null
        slug: string | null
        title: string | null
      }[]
    | null
  readonly programs:
    | {
        title: string | null
        shortDescription: string | null
        slug: string | null
        study_field: {
          type: string | null
          label: string | null
        } | null
        category: {
          type: string | null
        } | null
        timenprice:
          | {
              studyMonthsDuration: string | null
            }[]
          | null
      }[]
    | null
}

export default TypePageProgramsPropsQuery
