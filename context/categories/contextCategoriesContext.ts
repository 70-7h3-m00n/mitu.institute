import {
  TypeLibProgramCategory,
  TypeLibProgramCategorySlug,
  TypeLibProgramsCategories
} from '@/types/index'
import { createContext, Dispatch } from 'react'

const contextCategoriesContext = createContext<{
  categories: TypeLibProgramsCategories | null
  curCategory: TypeLibProgramCategory | null
  curCategorySlug: TypeLibProgramCategorySlug | null
  setCategories: Dispatch<any>
}>({
  categories: null,
  curCategory: null,
  curCategorySlug: null,
  setCategories: () => {}
})

export default contextCategoriesContext
