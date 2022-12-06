import React, { Dispatch } from 'react'
import { ValidationRules } from './contactWays'
import { HowToContact } from './howToContact'
import { HandleValue } from './useInput'

export interface AskFormState {
  howToContact: HowToContact
  setHowToContact: React.Dispatch<HowToContact>
  contactPath: string
  setContactPath: React.Dispatch<string>
  contact: string
  handleContact: HandleValue
  isValid: boolean
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>
  isFormShown: boolean
  togleFormShown: React.DispatchWithoutAction
  isStageSubmit: boolean
  submit: () => void
  isDirty: boolean
  setIsDirty: Dispatch<boolean | void>
  prev: () => void
  inputRef: React.MutableRefObject<HTMLInputElement | null>
  currentVerification: ValidationRules
}
