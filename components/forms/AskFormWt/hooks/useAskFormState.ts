import { Reducer, useReducer, useRef, useState } from 'react'
import { pathSeparator, prevPathFlag } from '../config'
import { waysToContact } from '../data'
import { UseAskFormState } from '../types'
import { contactPathReducer, isValidReducer } from '../utils'
import { useInput } from './useInput'
import { createSubmit } from '../utils'
import { HowToContact } from '../types/howToContact'
import { useCreateHandleBeforeSubmit } from './useCreateHandleBeforeSubmit'

export const useAskFormState: UseAskFormState = ({ addFields, routeFront }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [contactPath, setContactPath] = useReducer(contactPathReducer, '')
  const [howToContact, setHowToContact] = useState<HowToContact>(null)
  console.log(howToContact)
  const [isValid, setIsValid] = useReducer(isValidReducer, false)
  const [contact, handleContact, resetContact, isDirty, setIsDirty] =
    useInput('')
  const [isFormShown, togleFormShown] = useReducer<Reducer<boolean, void>>(
    isShown => {
      isShown && setHowToContact(null),
        setContactPath(''),
        resetContact(),
        setIsValid(),
        setIsDirty()
      return !isShown
    },
    false
  )
  const currentVerification = waysToContact
    .filter(({ name }) => contactPath.includes(name))
    .map(({ validationRules }) => validationRules)[0]
  const isStageSubmit =
    waysToContact.some(
      way => way.contactMethods.length === 1 && way.name.includes(contactPath)
    ) || contactPath.includes(pathSeparator)
  const prev = () => {
    setContactPath(prevPathFlag)
    resetContact()
    setIsValid()
    setIsDirty()
  }
  const handleBeforeSubmit = useCreateHandleBeforeSubmit({
    addFields,
    contact,
    contactPath,
    setHowToContact,
    currentVerification,
    isValid
  })
  const submit = createSubmit({
    setContactPath,
    howToContact,
    routeFront,
    inputRef,
    isValid
  })
  return {
    isValid,
    setIsValid,
    contact,
    handleContact,
    contactPath,
    setContactPath,
    howToContact,
    setHowToContact,
    isStageSubmit,
    handleBeforeSubmit,
    isFormShown,
    togleFormShown,
    isDirty,
    setIsDirty,
    prev,
    inputRef,
    currentVerification,
    submit
  }
}
