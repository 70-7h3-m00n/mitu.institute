import { NextRouter } from 'next/router'
import { Dispatch, RefObject, SetStateAction } from 'react'
import { AddFields } from './AddFields'
import { ValidationRules } from './contactWays'
import { HowToContact } from './howToContact'

interface Props {
  contactPath: string
  contact: string
  setHowToContact: Dispatch<SetStateAction<HowToContact>>
  addFields?: AddFields
  currentVerification: ValidationRules
  isValid: boolean
  inputRef: RefObject<HTMLInputElement>
}

export type UseCreateHandleBeforeSubmit = (props: Props) => () => void
