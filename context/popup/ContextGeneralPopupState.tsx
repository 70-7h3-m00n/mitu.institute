import { TypeChildren, TypeContextGeneralPopup } from '@/types/index'
import {
  SET_POPUP_UIFORM_ALPHA_OPEN,
  SET_POPUP_UIFORM_ALPHA_CLOSE,
  SET_POPUP_UIFORM_ALPHA_TOGGLE
} from '@/context/types'
import { useReducer } from 'react'
import {
  ContextGeneralPopupContext,
  contextGeneralPopupReducer
} from '@/context/index'

type TypeContextGeneralPopupStateProps = TypeChildren

const ContextGeneralPopupState = ({
  children
}: TypeContextGeneralPopupStateProps) => {
  const initialState: TypeContextGeneralPopup = {
    popupUIFormAlphaIsOpen: false
  }

  const [state, dispatch] = useReducer(contextGeneralPopupReducer, initialState)

  const setGeneralPopupOpen = () => {
    dispatch({ type: SET_POPUP_UIFORM_ALPHA_OPEN, payload: true })
  }

  const setGeneralPopupClose = () => {
    dispatch({ type: SET_POPUP_UIFORM_ALPHA_CLOSE, payload: false })
  }

  const setGeneralPopupToggle = () => {
    dispatch({
      type: SET_POPUP_UIFORM_ALPHA_TOGGLE,
      payload: !state.popupUIFormAlphaIsOpen
    })
  }

  return (
    <ContextGeneralPopupContext.Provider
      value={{
        popupUIFormAlphaIsOpen: state.popupUIFormAlphaIsOpen,
        setGeneralPopupOpen,
        setGeneralPopupClose,
        setGeneralPopupToggle
      }}>
      {children}
    </ContextGeneralPopupContext.Provider>
  )
}

export default ContextGeneralPopupState
