import { createContext } from 'react'

const contextCategoryContext = createContext<{
  category: string | null
  setCategory: ({ payload }: { payload: string | null }) => void
}>({
  category: null,
  setCategory: () => {}
})

export default contextCategoryContext
