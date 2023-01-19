import { Dispatch, SetStateAction } from 'react'
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
}

export type UseCreateHandleBeforeSubmit = (props: Props) => () => void
