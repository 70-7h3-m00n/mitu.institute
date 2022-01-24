import {
  TypeChildren,
  TypeContextCategories,
  TypeProgramCategories
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
  const initialState: TypeContextCategories = {
    categories: null
  }

  const [state, dispatch] = useReducer(contextCategoriesReducer, initialState)

  const setCategories = ({ payload }: { payload: TypeProgramCategories }) => {
    dispatch({ type: SET_CATEGORIES, payload })
  }

  return (
    <ContextCategoriesContext.Provider
      value={{
        categories: state.categories,
        setCategories
      }}>
      {children}
    </ContextCategoriesContext.Provider>
  )
}

export default ContextCategoriesState
