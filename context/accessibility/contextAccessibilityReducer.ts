import { TypeContextAccessibility } from '@/types/index'
import {
  SET_FONT_SM_TRUE,
  SET_FONT_SM_FALSE,
  SET_FONT_SM_TOGGLE,
  SET_FONT_MD_TRUE,
  SET_FONT_MD_FALSE,
  SET_FONT_MD_TOGGLE,
  SET_FONT_LG_TRUE,
  SET_FONT_LG_FALSE,
  SET_FONT_LG_TOGGLE,
  SET_LETTER_SPACING_SM_TRUE,
  SET_LETTER_SPACING_SM_FALSE,
  SET_LETTER_SPACING_SM_TOGGLE,
  SET_LETTER_SPACING_MD_TRUE,
  SET_LETTER_SPACING_MD_FALSE,
  SET_LETTER_SPACING_MD_TOGGLE,
  SET_LETTER_SPACING_LG_TRUE,
  SET_LETTER_SPACING_LG_FALSE,
  SET_LETTER_SPACING_LG_TOGGLE,
  SET_HIDDEN_IMGS_TRUE,
  SET_HIDDEN_IMGS_FALSE,
  SET_HIDDEN_IMGS_TOGGLE
} from '@/context/types'

type TypecontextAccessibilityReducerState = TypeContextAccessibility

type TypecontextAccessibilityReducerAction = {
  payload: boolean
  type:
    | typeof SET_FONT_SM_TRUE
    | typeof SET_FONT_SM_FALSE
    | typeof SET_FONT_SM_TOGGLE
    | typeof SET_FONT_MD_TRUE
    | typeof SET_FONT_MD_FALSE
    | typeof SET_FONT_MD_TOGGLE
    | typeof SET_FONT_LG_TRUE
    | typeof SET_FONT_LG_FALSE
    | typeof SET_FONT_LG_TOGGLE
    | typeof SET_LETTER_SPACING_SM_TRUE
    | typeof SET_LETTER_SPACING_SM_FALSE
    | typeof SET_LETTER_SPACING_SM_TOGGLE
    | typeof SET_LETTER_SPACING_MD_TRUE
    | typeof SET_LETTER_SPACING_MD_FALSE
    | typeof SET_LETTER_SPACING_MD_TOGGLE
    | typeof SET_LETTER_SPACING_LG_TRUE
    | typeof SET_LETTER_SPACING_LG_FALSE
    | typeof SET_LETTER_SPACING_LG_TOGGLE
    | typeof SET_HIDDEN_IMGS_TRUE
    | typeof SET_HIDDEN_IMGS_FALSE
    | typeof SET_HIDDEN_IMGS_TOGGLE
}

const contextAccessibilityReducer = (
  state: TypecontextAccessibilityReducerState,
  action: TypecontextAccessibilityReducerAction
) => {
  switch (action.type) {
    case SET_FONT_SM_TRUE:
      return {
        ...state,
        fontSm: action.payload
      }
    case SET_FONT_SM_FALSE:
      return {
        ...state,
        fontSm: action.payload
      }
    case SET_FONT_SM_TOGGLE:
      return {
        ...state,
        fontSm: action.payload
      }
    case SET_FONT_MD_TRUE:
      return {
        ...state,
        fontMd: action.payload
      }
    case SET_FONT_MD_FALSE:
      return {
        ...state,
        fontMd: action.payload
      }
    case SET_FONT_MD_TOGGLE:
      return {
        ...state,
        fontMd: action.payload
      }
    case SET_FONT_LG_TRUE:
      return {
        ...state,
        fontLg: action.payload
      }
    case SET_FONT_LG_FALSE:
      return {
        ...state,
        fontLg: action.payload
      }
    case SET_FONT_LG_TOGGLE:
      return {
        ...state,
        fontLg: action.payload
      }
    case SET_LETTER_SPACING_SM_TRUE:
      return {
        ...state,
        letterSpacingSm: action.payload
      }
    case SET_LETTER_SPACING_SM_FALSE:
      return {
        ...state,
        letterSpacingSm: action.payload
      }
    case SET_LETTER_SPACING_SM_TOGGLE:
      return {
        ...state,
        letterSpacingSm: action.payload
      }
    case SET_LETTER_SPACING_MD_TRUE:
      return {
        ...state,
        letterSpacingMd: action.payload
      }
    case SET_LETTER_SPACING_MD_FALSE:
      return {
        ...state,
        letterSpacingMd: action.payload
      }
    case SET_LETTER_SPACING_MD_TOGGLE:
      return {
        ...state,
        letterSpacingMd: action.payload
      }
    case SET_LETTER_SPACING_LG_TRUE:
      return {
        ...state,
        letterSpacingLg: action.payload
      }
    case SET_LETTER_SPACING_LG_FALSE:
      return {
        ...state,
        letterSpacingLg: action.payload
      }
    case SET_LETTER_SPACING_LG_TOGGLE:
      return {
        ...state,
        letterSpacingLg: action.payload
      }
    case SET_HIDDEN_IMGS_TRUE:
      return {
        ...state,
        hiddenImgs: action.payload
      }
    case SET_HIDDEN_IMGS_FALSE:
      return {
        ...state,
        hiddenImgs: action.payload
      }
    case SET_HIDDEN_IMGS_TOGGLE:
      return {
        ...state,
        hiddenImgs: action.payload
      }
    default:
      return state
  }
}

export default contextAccessibilityReducer
