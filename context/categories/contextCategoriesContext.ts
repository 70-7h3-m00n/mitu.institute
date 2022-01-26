import {
  TypeLibProgramCategory,
  TypeLibProgramCategorySlug,
  TypeLibProgramsCategories
} from '@/types/index'
import { createContext } from 'react'

const contextCategoriesContext = createContext<{
  categories: TypeLibProgramsCategories | null
  curCategory: TypeLibProgramCategory | null
  curCategorySlug: TypeLibProgramCategorySlug | null
  setCategories: ({
    payload
  }: {
    payload: {
      categories: TypeLibProgramsCategories | null
      curCategorySlug: TypeLibProgramCategorySlug | null
    } | null
  }) => void
}>({
  categories: null,
  curCategory: null,
  curCategorySlug: null,
  setCategories: () => {}
})

export default contextCategoriesContext
