import {
  TypeAnchor,
  TypeLibProgramsCategories,
  TypeLibProgramCategory,
  TypeLibProgramCategorySlug
} from '@/types/index'

type TypeLinksHeaderPromo =
  | {
      readonly href: TypeAnchor | null
      readonly val?: string | null
      readonly payload: {
        categories: TypeLibProgramsCategories | null
        curCategory: TypeLibProgramCategory | null
        curCategorySlug: TypeLibProgramCategorySlug | null
      }
    }[]
  | null

export default TypeLinksHeaderPromo
