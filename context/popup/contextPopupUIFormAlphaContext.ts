import { createContext } from 'react'

const contextPopupUIFormAlphaContext = createContext({
  popupUIFormAlphaIsOpen: false,
  setPopupUIFormAlphaOpen: () => {},
  setPopupUIFormAlphaClose: () => {},
  setPopupUIFormAlphaToggle: () => {}
})

export default contextPopupUIFormAlphaContext
