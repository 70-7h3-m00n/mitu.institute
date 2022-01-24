import { TypeContextCategories, TypeProgramCategories } from '@/types/index'
import { SET_CATEGORIES } from '@/context/types'

type contextCategoriesReducerState = TypeContextCategories

type contextCategoriesReducerAction = {
  payload: TypeProgramCategories
  type: typeof SET_CATEGORIES
}

const contextCategoriesReducer = (
  state: contextCategoriesReducerState,
  action: contextCategoriesReducerAction
) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state
  }
}

export default contextCategoriesReducer
