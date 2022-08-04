type TypeLibLegalDocumentDocuments = {
  title?: string
  text?: string
  pdf?: {
    url?: string
  }
  complicatedTable?: boolean
  table?: string
  numeric_order?: {
    index?: number | string
  }
}[]

export default TypeLibLegalDocumentDocuments
