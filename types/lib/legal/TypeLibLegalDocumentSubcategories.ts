import { TypeLibLegalDocumentDocuments } from '@/types/index'

type TypeLibLegalDocumentSubcategories = {
  title?: string
  numeric_order?: {
    index?: string
  }
  documents?: TypeLibLegalDocumentDocuments | null
  document_category?: {
    title?: string
  }
}[]

export default TypeLibLegalDocumentSubcategories
