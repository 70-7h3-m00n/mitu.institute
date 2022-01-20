import { TypeProgramCategory } from '@/types/index'
import { createContext } from 'react'

const contextCategoryContext = createContext<{
  category: TypeProgramCategory
  setCategory: ({ payload }: { payload: TypeProgramCategory }) => void
}>({
  category: 'bachelor',
  setCategory: () => {}
})

export default contextCategoryContext
