import { createContext } from 'react'

const contextAccessibilityContext = createContext({
  fontSm: false,
  fontMd: false,
  fontLg: false,
  letterSpacingSm: false,
  letterSpacingMd: false,
  letterSpacingLg: false,
  hiddenImgs: false,
  setFontSmTrue: () => {},
  setFontSmFalse: () => {},
  setFontSmToggle: () => {},
  setFontMdTrue: () => {},
  setFontMdFalse: () => {},
  setFontMdToggle: () => {},
  setFontLgTrue: () => {},
  setFontLgFalse: () => {},
  setFontLgToggle: () => {},
  setLetterSpacingSmTrue: () => {},
  setLetterSpacingSmFalse: () => {},
  setLetterSpacingSmToggle: () => {},
  setLetterSpacingMdTrue: () => {},
  setLetterSpacingMdFalse: () => {},
  setLetterSpacingMdToggle: () => {},
  setLetterSpacingLgTrue: () => {},
  setLetterSpacingLgFalse: () => {},
  setLetterSpacingLgToggle: () => {},
  setHiddenImgsTrue: () => {},
  setHiddenImgsFalse: () => {},
  setHiddenImgsToggle: () => {}
})

export default contextAccessibilityContext
