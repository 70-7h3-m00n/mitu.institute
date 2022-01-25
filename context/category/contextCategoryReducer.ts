import { SET_CATEGORY } from '@/context/types'

type contextCategoryReducerState = {
  category: string | null
}

type contextCategoryReducerAction = {
  payload: string | null
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
