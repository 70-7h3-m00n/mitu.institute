import { TypeChildren, TypeContextAccessibility } from '@/types/index'
import {
  SET_FONT_SM_TRUE,
  SET_FONT_SM_FALSE,
  SET_FONT_SM_TOGGLE,
  SET_FONT_MD_TRUE,
  SET_FONT_MD_FALSE,
  SET_FONT_MD_TOGGLE,
  SET_FONT_LG_TRUE,
  SET_FONT_LG_FALSE,
  SET_FONT_LG_TOGGLE,
  SET_LETTER_SPACING_SM_TRUE,
  SET_LETTER_SPACING_SM_FALSE,
  SET_LETTER_SPACING_SM_TOGGLE,
  SET_LETTER_SPACING_MD_TRUE,
  SET_LETTER_SPACING_MD_FALSE,
  SET_LETTER_SPACING_MD_TOGGLE,
  SET_LETTER_SPACING_LG_TRUE,
  SET_LETTER_SPACING_LG_FALSE,
  SET_LETTER_SPACING_LG_TOGGLE,
  SET_HIDDEN_IMGS_TRUE,
  SET_HIDDEN_IMGS_FALSE,
  SET_HIDDEN_IMGS_TOGGLE
} from '@/context/types'
import { useReducer } from 'react'
import {
  ContextAccessibilityContext,
  contextAccessibilityReducer
} from '@/context/index'

type TypeContextAccessibilityStateProps = TypeChildren

const ContextAccessibilityState = ({
  children
}: TypeContextAccessibilityStateProps) => {
  const initialState: TypeContextAccessibility = {
    fontSm: false,
    fontMd: false,
    fontLg: false,
    letterSpacingSm: false,
    letterSpacingMd: false,
    letterSpacingLg: false,
    hiddenImgs: false
  }

  const [state, dispatch] = useReducer(
    contextAccessibilityReducer,
    initialState
  )

  const setFontSmTrue = () => {
    dispatch({ type: SET_FONT_SM_TRUE, payload: true })
    dispatch({ type: SET_FONT_MD_FALSE, payload: false })
    dispatch({ type: SET_FONT_LG_FALSE, payload: false })
  }
  const setFontSmFalse = () => {
    dispatch({ type: SET_FONT_SM_FALSE, payload: false })
  }
  const setFontSmToggle = () => {
    dispatch({
      type: SET_FONT_SM_TOGGLE,
      payload: !state.fontSm
    })
    dispatch({
      type: SET_FONT_MD_FALSE,
      payload: false
    })
    dispatch({
      type: SET_FONT_LG_FALSE,
      payload: false
    })
  }

  const setFontMdTrue = () => {
    dispatch({ type: SET_FONT_SM_FALSE, payload: false })
    dispatch({ type: SET_FONT_MD_TRUE, payload: true })
    dispatch({ type: SET_FONT_LG_FALSE, payload: false })
  }
  const setFontMdFalse = () => {
    dispatch({ type: SET_FONT_MD_FALSE, payload: false })
  }
  const setFontMdToggle = () => {
    dispatch({
      type: SET_FONT_SM_FALSE,
      payload: false
    })
    dispatch({
      type: SET_FONT_MD_TOGGLE,
      payload: !state.fontMd
    })
    dispatch({
      type: SET_FONT_LG_FALSE,
      payload: false
    })
  }

  const setFontLgTrue = () => {
    dispatch({ type: SET_FONT_SM_FALSE, payload: false })
    dispatch({ type: SET_FONT_MD_FALSE, payload: false })
    dispatch({ type: SET_FONT_LG_TRUE, payload: true })
  }
  const setFontLgFalse = () => {
    dispatch({ type: SET_FONT_LG_FALSE, payload: false })
  }
  const setFontLgToggle = () => {
    dispatch({
      type: SET_FONT_SM_FALSE,
      payload: false
    })
    dispatch({
      type: SET_FONT_MD_FALSE,
      payload: false
    })
    dispatch({
      type: SET_FONT_LG_TOGGLE,
      payload: !state.fontLg
    })
  }

  const setLetterSpacingSmTrue = () => {
    dispatch({ type: SET_LETTER_SPACING_SM_TRUE, payload: true })
    dispatch({ type: SET_LETTER_SPACING_MD_FALSE, payload: false })
    dispatch({ type: SET_LETTER_SPACING_LG_FALSE, payload: false })
  }
  const setLetterSpacingSmFalse = () => {
    dispatch({ type: SET_LETTER_SPACING_SM_FALSE, payload: false })
  }
  const setLetterSpacingSmToggle = () => {
    dispatch({
      type: SET_LETTER_SPACING_SM_TOGGLE,
      payload: !state.letterSpacingSm
    })
    dispatch({
      type: SET_LETTER_SPACING_MD_FALSE,
      payload: false
    })
    dispatch({
      type: SET_LETTER_SPACING_LG_FALSE,
      payload: false
    })
  }

  const setLetterSpacingMdTrue = () => {
    dispatch({ type: SET_LETTER_SPACING_SM_FALSE, payload: false })
    dispatch({ type: SET_LETTER_SPACING_MD_TRUE, payload: true })
    dispatch({ type: SET_LETTER_SPACING_LG_FALSE, payload: false })
  }
  const setLetterSpacingMdFalse = () => {
    dispatch({ type: SET_LETTER_SPACING_MD_FALSE, payload: false })
  }
  const setLetterSpacingMdToggle = () => {
    dispatch({
      type: SET_LETTER_SPACING_SM_FALSE,
      payload: false
    })
    dispatch({
      type: SET_LETTER_SPACING_MD_TOGGLE,
      payload: !state.letterSpacingMd
    })
    dispatch({
      type: SET_LETTER_SPACING_LG_FALSE,
      payload: false
    })
  }

  const setLetterSpacingLgTrue = () => {
    dispatch({ type: SET_LETTER_SPACING_SM_FALSE, payload: false })
    dispatch({ type: SET_LETTER_SPACING_MD_FALSE, payload: false })
    dispatch({ type: SET_LETTER_SPACING_LG_TRUE, payload: true })
  }
  const setLetterSpacingLgFalse = () => {
    dispatch({ type: SET_LETTER_SPACING_LG_FALSE, payload: false })
  }
  const setLetterSpacingLgToggle = () => {
    dispatch({
      type: SET_LETTER_SPACING_SM_FALSE,
      payload: false
    })
    dispatch({
      type: SET_LETTER_SPACING_MD_FALSE,
      payload: false
    })
    dispatch({
      type: SET_LETTER_SPACING_LG_TOGGLE,
      payload: !state.letterSpacingLg
    })
  }

  const setHiddenImgsTrue = () => {
    dispatch({ type: SET_HIDDEN_IMGS_TRUE, payload: true })
  }
  const setHiddenImgsFalse = () => {
    dispatch({ type: SET_HIDDEN_IMGS_FALSE, payload: false })
  }
  const setHiddenImgsToggle = () => {
    dispatch({
      type: SET_HIDDEN_IMGS_TOGGLE,
      payload: !state.hiddenImgs
    })
  }

  return (
    <ContextAccessibilityContext.Provider
      value={{
        fontSm: state.fontSm,
        fontMd: state.fontMd,
        fontLg: state.fontLg,
        letterSpacingSm: state.letterSpacingSm,
        letterSpacingMd: state.letterSpacingMd,
        letterSpacingLg: state.letterSpacingLg,
        hiddenImgs: state.hiddenImgs,
        setFontSmTrue,
        setFontSmFalse,
        setFontSmToggle,
        setFontMdTrue,
        setFontMdFalse,
        setFontMdToggle,
        setFontLgTrue,
        setFontLgFalse,
        setFontLgToggle,
        setLetterSpacingSmTrue,
        setLetterSpacingSmFalse,
        setLetterSpacingSmToggle,
        setLetterSpacingMdTrue,
        setLetterSpacingMdFalse,
        setLetterSpacingMdToggle,
        setLetterSpacingLgTrue,
        setLetterSpacingLgFalse,
        setLetterSpacingLgToggle,
        setHiddenImgsTrue,
        setHiddenImgsFalse,
        setHiddenImgsToggle
      }}>
      {children}
    </ContextAccessibilityContext.Provider>
  )
}

export default ContextAccessibilityState
