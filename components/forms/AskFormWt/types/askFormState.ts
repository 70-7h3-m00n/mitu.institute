import React, { Dispatch, SetStateAction } from 'react'
import { ValidationRules } from './contactWays'
import { HowToContact } from './howToContact'
import { Submit } from './Submit'
import { HandleValue } from './useInput'

export interface AskFormState {
  howToContact: HowToContact
  setHowToContact: Dispatch<SetStateAction<HowToContact>>
  contactPath: string
  setContactPath: React.Dispatch<string>
  contact: string
  handleContact: HandleValue
  isValid: boolean
  setIsValid: React.DispatchWithoutAction
  isFormShown: boolean
  togleFormShown: React.DispatchWithoutAction
  isStageSubmit: boolean
  handleBeforeSubmit: () => void
  isDirty: boolean
  setIsDirty: Dispatch<boolean | void>
  prev: () => void
  inputRef: React.MutableRefObject<HTMLInputElement | null>
  currentVerification: ValidationRules
  submit: Submit
}
