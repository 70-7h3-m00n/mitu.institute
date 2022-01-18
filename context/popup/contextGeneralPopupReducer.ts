import { TypeContextGeneralPopup } from '@/types/index'
import {
  SET_POPUP_UIFORM_ALPHA_OPEN,
  SET_POPUP_UIFORM_ALPHA_CLOSE,
  SET_POPUP_UIFORM_ALPHA_TOGGLE
} from '@/context/types'

type contextGeneralPopupReducerState = TypeContextGeneralPopup

type contextGeneralPopupReducerAction = {
  payload: boolean
  type:
    | typeof SET_POPUP_UIFORM_ALPHA_OPEN
    | typeof SET_POPUP_UIFORM_ALPHA_CLOSE
    | typeof SET_POPUP_UIFORM_ALPHA_TOGGLE
}

const contextGeneralPopupReducer = (
  state: contextGeneralPopupReducerState,
  action: contextGeneralPopupReducerAction
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

export default contextGeneralPopupReducer
