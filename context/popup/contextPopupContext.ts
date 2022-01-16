import { TypeContextPopup } from '@/types/index'
import { createContext } from 'react'

const contextPopupContext = createContext({
  popupAlphaIsOpen: false,
  popupAlphaOpen: () => {},
  popupAlphaClose: () => {},
  popupAlphaToggle: () => {}
})

export default contextPopupContext
