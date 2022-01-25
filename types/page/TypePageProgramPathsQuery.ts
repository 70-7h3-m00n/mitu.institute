type TypePageProgramPathsQuery = {
  readonly programs:
    | {
        readonly category: {
          slug: string | null
        } | null
        readonly study_field: {
          slug: string | null
        } | null
        slug: string | null
      }[]
    | null
}

export default TypePageProgramPathsQuery
