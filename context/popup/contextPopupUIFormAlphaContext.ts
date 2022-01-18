import { createContext } from 'react'

const contextGeneralPopupContext = createContext({
  popupUIFormAlphaIsOpen: false,
  setGeneralPopupOpen: () => {},
  setGeneralPopupClose: () => {},
  setGeneralPopupToggle: () => {}
})

export default contextGeneralPopupContext
