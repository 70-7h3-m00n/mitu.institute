import { createContext } from 'react'

const contextCategoriesContext = createContext<{
  categories:
    | {
        label: string | null
        type: string | null
        slug: string | null
      }[]
    | null
  setCategories: ({
    payload
  }: {
    payload:
      | {
          label: string | null
          type: string | null
          slug: string | null
        }[]
      | null
  }) => void
}>({
  categories: null,
  setCategories: () => {}
})

export default contextCategoriesContext
