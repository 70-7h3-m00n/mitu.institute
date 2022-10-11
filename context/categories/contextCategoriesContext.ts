import {
  TypeLibProgramCategory,
  TypeLibProgramCategorySlug,
  TypeLibProgramsCategories
} from '@/types/index'
import { createContext, Dispatch, SetStateAction } from 'react'

const contextCategoriesContext = createContext<{
  categories: TypeLibProgramsCategories | null
  curCategory: TypeLibProgramCategory | null
  curCategorySlug: TypeLibProgramCategorySlug | null
  setCategories: Dispatch<
    SetStateAction<{
      categories: TypeLibProgramsCategories | null
      curCategory: TypeLibProgramCategory | null
      curCategorySlug: TypeLibProgramCategorySlug | null
    }>
  >
}>({
  categories: null,
  curCategory: null,
  curCategorySlug: null,
  setCategories: () => {}
})

export default contextCategoriesContext
