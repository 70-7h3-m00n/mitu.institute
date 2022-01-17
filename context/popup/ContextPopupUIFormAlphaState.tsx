import { TypeChildren, TypeContextPopupUIFormAlpha } from '@/types/index'
import {
  SET_POPUP_UIFORM_ALPHA_OPEN,
  SET_POPUP_UIFORM_ALPHA_CLOSE,
  SET_POPUP_UIFORM_ALPHA_TOGGLE
} from '@/context/types'
import { useReducer } from 'react'
import {
  ContextPopupUIFormAlphaContext,
  contextPopupUIFormAlphaReducer
} from '@/context/index'

type TypeContextPopupUIFormAlphaStateProps = TypeChildren

const ContextPopupUIFormAlphaState = ({
  children
}: TypeContextPopupUIFormAlphaStateProps) => {
  const initialState: TypeContextPopupUIFormAlpha = {
    popupUIFormAlphaIsOpen: false
  }

  const [state, dispatch] = useReducer(
    contextPopupUIFormAlphaReducer,
    initialState
  )

  const setPopupUIFormAlphaOpen = () => {
    dispatch({ type: SET_POPUP_UIFORM_ALPHA_OPEN, payload: true })
  }

  const setPopupUIFormAlphaClose = () => {
    dispatch({ type: SET_POPUP_UIFORM_ALPHA_CLOSE, payload: false })
  }

  const setPopupUIFormAlphaToggle = () => {
    dispatch({
      type: SET_POPUP_UIFORM_ALPHA_TOGGLE,
      payload: !state.popupUIFormAlphaIsOpen
    })
  }

  return (
    <ContextPopupUIFormAlphaContext.Provider
      value={{
        popupUIFormAlphaIsOpen: state.popupUIFormAlphaIsOpen,
        setPopupUIFormAlphaOpen,
        setPopupUIFormAlphaClose,
        setPopupUIFormAlphaToggle
      }}>
      {children}
    </ContextPopupUIFormAlphaContext.Provider>
  )
}

export default ContextPopupUIFormAlphaState
