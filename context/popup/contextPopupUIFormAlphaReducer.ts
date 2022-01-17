import { TypeContextPopupUIFormAlpha } from '@/types/index'
import {
  SET_POPUP_UIFORM_ALPHA_OPEN,
  SET_POPUP_UIFORM_ALPHA_CLOSE,
  SET_POPUP_UIFORM_ALPHA_TOGGLE
} from '@/context/types'

type contextPopupUIFormAlphaReducerState = TypeContextPopupUIFormAlpha

type contextPopupUIFormAlphaReducerAction = {
  payload: boolean
  type:
    | typeof SET_POPUP_UIFORM_ALPHA_OPEN
    | typeof SET_POPUP_UIFORM_ALPHA_CLOSE
    | typeof SET_POPUP_UIFORM_ALPHA_TOGGLE
}

const contextPopupUIFormAlphaReducer = (
  state: contextPopupUIFormAlphaReducerState,
  action: contextPopupUIFormAlphaReducerAction
) => {
  switch (action.type) {
    case SET_POPUP_UIFORM_ALPHA_OPEN:
      return {
        ...state,
        popupUIFormAlphaIsOpen: action.payload
      }
    case SET_POPUP_UIFORM_ALPHA_CLOSE:
      return {
        ...state,
        popupUIFormAlphaIsOpen: action.payload
      }
    case SET_POPUP_UIFORM_ALPHA_TOGGLE:
      return {
        ...state,
        popupUIFormAlphaIsOpen: action.payload
      }
    default:
      return state
  }
}

export default contextPopupUIFormAlphaReducer
