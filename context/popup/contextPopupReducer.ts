import { TypeContextPopup } from '@/types/index'
import {
  POPUP_ALPHA_OPEN,
  POPUP_ALPHA_CLOSE,
  POPUP_ALPHA_TOGGLE
} from '@/context/types'

type contextPopupReducerState = TypeContextPopup

type contextPopupReducerAction = {
  payload: boolean
  type:
    | typeof POPUP_ALPHA_OPEN
    | typeof POPUP_ALPHA_CLOSE
    | typeof POPUP_ALPHA_TOGGLE
}

const contextPopupReducer = (
  state: contextPopupReducerState,
  action: contextPopupReducerAction
) => {
  switch (action.type) {
    case POPUP_ALPHA_OPEN:
      return {
        ...state,
        popupAlphaIsOpen: action.payload
      }
    case POPUP_ALPHA_CLOSE:
      return {
        ...state,
        popupAlphaIsOpen: action.payload
      }
    case POPUP_ALPHA_TOGGLE:
      return {
        ...state,
        popupAlphaIsOpen: action.payload
      }
    default:
      return state
  }
}

export default contextPopupReducer
