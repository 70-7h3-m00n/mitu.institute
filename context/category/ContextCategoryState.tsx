import {
  TypeChildren,
  TypeContextCategory,
  TypeProgramCategory
} from '@/types/index'
import { SET_CATEGORY } from '@/context/types'
import { useReducer } from 'react'
import { ContextCategoryContext, contextCategoryReducer } from '@/context/index'

type TypeContextCategoryStateProps = TypeChildren

const ContextCategoryState = ({ children }: TypeContextCategoryStateProps) => {
  const initialState: TypeContextCategory = {
    category: 'bachelor'
  }

  const [state, dispatch] = useReducer(contextCategoryReducer, initialState)

  const setCategory = ({ payload }: { payload: TypeProgramCategory }) => {
    dispatch({ type: SET_CATEGORY, payload })
  }

  return (
    <ContextCategoryContext.Provider
      value={{
        category: state.category,
        setCategory
      }}>
      {children}
    </ContextCategoryContext.Provider>
  )
}

export default ContextCategoryState
