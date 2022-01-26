import {
  TypeChildren,
  TypeLibProgramsCategories,
  TypeLibProgramCategory,
  TypeLibProgramCategorySlug
} from '@/types/index'
import { SET_CATEGORIES } from '@/context/types'
import { useReducer } from 'react'
import {
  ContextCategoriesContext,
  contextCategoriesReducer
} from '@/context/index'

type TypeContextCategoriesStateProps = TypeChildren

const ContextCategoriesState = ({
  children
}: TypeContextCategoriesStateProps) => {
  const initialState: {
    categories: TypeLibProgramsCategories | null
    curCategory: TypeLibProgramCategory | null
    curCategorySlug: TypeLibProgramCategorySlug | null
  } = {
    categories: null,
    curCategory: null,
    curCategorySlug: null
  }

  const [state, dispatch] = useReducer(contextCategoriesReducer, initialState)

  const setCategories = ({
    payload
  }: {
    payload: {
      categories: TypeLibProgramsCategories | null
      curCategorySlug: TypeLibProgramCategorySlug | null
    } | null
  }) => {
    dispatch({ type: SET_CATEGORIES, payload })
  }

  return (
    <ContextCategoriesContext.Provider
      value={{
        categories: state.categories,
        curCategory: state.curCategory,
        curCategorySlug: state.curCategorySlug,
        setCategories
      }}>
      {children}
    </ContextCategoriesContext.Provider>
  )
}

export default ContextCategoriesState
