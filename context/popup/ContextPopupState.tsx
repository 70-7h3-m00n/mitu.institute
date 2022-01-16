import { TypeChildren, TypeContextPopup } from '@/types/index'
import {
  POPUP_ALPHA_OPEN,
  POPUP_ALPHA_CLOSE,
  POPUP_ALPHA_TOGGLE
} from '@/context/types'
import { useReducer } from 'react'
import ContextPopupContext from '@/context/popup/contextPopupContext'
import contextPopupReducer from '@/context/popup/contextPopupReducer'

type TypeContextPopupStateProps = TypeChildren

const ContextPopupState = ({ children }: TypeContextPopupStateProps) => {
  const initialState: TypeContextPopup = {
    popupAlphaIsOpen: false
  }

  const [state, dispatch] = useReducer(contextPopupReducer, initialState)

  const popupAlphaOpen = () => {
    dispatch({ type: POPUP_ALPHA_OPEN, payload: true })
  }

  const popupAlphaClose = () => {
    dispatch({ type: POPUP_ALPHA_CLOSE, payload: false })
  }

  const popupAlphaToggle = () => {
    dispatch({ type: POPUP_ALPHA_TOGGLE, payload: !state.popupAlphaIsOpen })
  }

  return (
    <ContextPopupContext.Provider
      value={{
        popupAlphaIsOpen: state.popupAlphaIsOpen,
        popupAlphaOpen,
        popupAlphaClose,
        popupAlphaToggle
      }}>
      {children}
    </ContextPopupContext.Provider>
  )
}

export default ContextPopupState
