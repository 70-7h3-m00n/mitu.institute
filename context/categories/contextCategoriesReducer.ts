import { SET_CATEGORIES } from '@/context/types'

type contextCategoriesReducerState = {
  categories:
    | {
        label: string | null
        type: string | null
        slug: string | null
      }[]
    | null
}

type contextCategoriesReducerAction = {
  payload:
    | {
        label: string | null
        type: string | null
        slug: string | null
      }[]
    | null
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
