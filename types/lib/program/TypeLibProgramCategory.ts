import {
  TypeLibProgramCategoryLabel,
  TypeLibProgramCategorySlug,
  TypeLibProgramCategoryType
} from '@/types/index'

type TypeLibProgramCategory = {
  type?: TypeLibProgramCategoryType
  slug?: TypeLibProgramCategorySlug
  label?: TypeLibProgramCategoryLabel
  description?: string | null
}

export default TypeLibProgramCategory
