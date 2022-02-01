import { SET_CATEGORIES } from '@/context/types'
import {
  TypeLibProgramsCategories,
  TypeLibProgramCategory,
  TypeLibProgramCategorySlug
} from '@/types/index'

type contextCategoriesReducerState = {
  categories: TypeLibProgramsCategories | null
  curCategory: TypeLibProgramCategory | null
  curCategorySlug: TypeLibProgramCategorySlug | null
}

type contextCategoriesReducerAction = {
  payload: {
    categories: TypeLibProgramsCategories | null
    curCategorySlug: TypeLibProgramCategorySlug | null
  } | null
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
        categories: action.payload?.categories || null,
        curCategory:
          action.payload?.categories?.filter(
            category => category?.slug === action.payload?.curCategorySlug
          )?.[0] || null,
        curCategorySlug: action.payload?.curCategorySlug || null
      }
    default:
      return state
  }
}

export default contextCategoriesReducer
