import { TypeProgramCategories } from '@/types/index'
import { createContext } from 'react'

const contextCategoriesContext = createContext<{
  categories: TypeProgramCategories
  setCategories: ({ payload }: { payload: TypeProgramCategories }) => void
}>({
  categories: null,
  setCategories: () => {}
})

export default contextCategoriesContext
