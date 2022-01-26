import {
  TypeAnchor,
  TypeLibProgramsCategories,
  TypeLibProgramCategorySlug
} from '@/types/index'

type TypeLinksHeaderPromo =
  | {
      readonly href: TypeAnchor | null
      readonly val?: string | null
      readonly payload: {
        categories: TypeLibProgramsCategories | null
        curCategorySlug: TypeLibProgramCategorySlug | null
      } | null
    }[]
  | null

export default TypeLinksHeaderPromo
