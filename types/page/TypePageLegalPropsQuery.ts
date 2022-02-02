import { TypeLibProgramsCategories } from '@/types/index'

type TypePageLegalPropsQuery = {
  readonly categories: TypeLibProgramsCategories | null
  readonly documentCategories:
    | {
        title?: string
        numeric_order?: {
          index?: string
        }
      }[]
    | null
  readonly documentSubcategories:
    | {
        title?: string
        documents?:
          | {
              title?: string
              text?: string
              pdf?: {
                url?: string
              }
            }[]
          | null
        document_category?: {
          title?: string
        }
      }[]
    | null
}

export default TypePageLegalPropsQuery
