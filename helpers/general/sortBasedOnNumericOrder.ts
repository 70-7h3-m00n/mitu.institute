import {
  TypeLibLegalDocumentCategories,
  TypeLibLegalDocumentSubcategories,
  TypeLibLegalDocumentDocuments
} from '@/types/index'

// type TypeSortBasedOnNumericOrderProps =
//   | (TypeLibLegalDocumentCategories &
//       TypeLibLegalDocumentSubcategories &
//       TypeLibLegalDocumentDocuments)
//   | null

// TODO: figure out better types
type TypeSortBasedOnNumericOrderProps = any

const sortBasedOnNumericOrder = (arr: TypeSortBasedOnNumericOrderProps) =>
  [...(arr || [])].sort(
    (a, b) =>
      Number(a?.numeric_order?.index || Infinity) -
      Number(b?.numeric_order?.index || Infinity)
  )

export default sortBasedOnNumericOrder
