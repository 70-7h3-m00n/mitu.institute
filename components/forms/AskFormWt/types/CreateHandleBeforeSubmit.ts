import { NextRouter } from 'next/router'
import { Dispatch, RefObject } from 'react'
import { AddFields } from './AddFields'
import { ValidationRules } from './contactWays'
import { HowToContact } from './howToContact'

interface CreateHandleBeforeSubmitProps {
  contactPath: string
  contact: string
  router: NextRouter
  howToContact: HowToContact
  setHowToContact: Dispatch<HowToContact>
  addFields?: AddFields
  currentVerification: ValidationRules
  isValid: boolean
  inputRef: RefObject<HTMLInputElement>
}

export type CreateHandleBeforeSubmit = (
  props: CreateHandleBeforeSubmitProps
) => () => void
