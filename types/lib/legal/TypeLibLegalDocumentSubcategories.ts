type TypeLibLegalDocumentSubcategories = {
  title?: string
  numeric_order?: {
    index?: string
  }
  documents?:
    | {
        title?: string
        text?: string
        pdf?: {
          url?: string
        }
        complicatedTable?: boolean
      }[]
    | null
  document_category?: {
    title?: string
  }
}[]

export default TypeLibLegalDocumentSubcategories
