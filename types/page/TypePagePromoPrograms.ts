type TypePagePromoPrograms = {
  readonly programs?: {
    title?: string
    shortDescription?: string
    study_field?: {
      label?: string
    }
    category?: {
      type?: string
    }
    timenprice?: {
      studyMonthsDuration?: number
    }[]
  }
}

export default TypePagePromoPrograms
