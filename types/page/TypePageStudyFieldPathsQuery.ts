type TypePageStudyFieldPathsQuery = {
  readonly programs:
    | {
        readonly category: {
          slug: string | null
        } | null
        readonly study_field: {
          slug: string | null
        } | null
      }[]
    | null
}

export default TypePageStudyFieldPathsQuery
