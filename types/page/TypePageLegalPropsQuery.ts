import {
  TypeLibProgramsCategories,
  TypeLibLegalDocumentCategories,
  TypeLibLegalDocumentSubcategories
} from '@/types/index'

type TypePageLegalPropsQuery = {
  readonly categories: TypeLibProgramsCategories | null
  readonly documentCategories: TypeLibLegalDocumentCategories | null
  readonly documentSubcategories: TypeLibLegalDocumentSubcategories | null
}

export default TypePageLegalPropsQuery
