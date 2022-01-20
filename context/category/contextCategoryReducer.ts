import { TypeContextCategory, TypeProgramCategory } from '@/types/index'
import { SET_CATEGORY } from '@/context/types'

type contextCategoryReducerState = TypeContextCategory

type contextCategoryReducerAction = {
  payload: TypeProgramCategory
  type: typeof SET_CATEGORY
}

const contextCategoryReducer = (
  state: contextCategoryReducerState,
  action: contextCategoryReducerAction
) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    default:
      return state
  }
}

export default contextCategoryReducer
