import { useRouter } from 'next/router'
import { Reducer, useReducer, useRef } from 'react'
import { pathSeparator, waysToContact } from '../data'
import { AddFields, HowToContactReducer, UseAskFormState } from '../types'
import { contactPathReducer } from '../utils'
import { useInput } from './useInput'

export const useAskFormState: UseAskFormState = addFields => {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [isValid, setIsValid] = useReducer<Reducer<boolean, boolean | void>>(
    (_prev, value) => (typeof value === 'boolean' ? value : false),
    false
  )
  const [contactPath, setContactPath] = useReducer(contactPathReducer, '')
  const [contact, handleContact, resetContact, isDirty, setIsDirty] =
    useInput('')
  const initHowToContact = (addFields: AddFields) => addFields
  const [howToContact, setHowToContact] = useReducer<
    HowToContactReducer,
    AddFields
  >(
    (prevValue, newValue) =>
      !newValue
        ? initHowToContact(addFields || null)
        : Object.fromEntries(
            Object.entries({ ...prevValue, ...newValue }).filter(
              prop => prop[1]
            )
          ),
    addFields || null,
    initHowToContact
  )
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
    setContactPath('prev')
    resetContact()
    setIsValid()
    setIsDirty()
  }
  const submit = () =>
    (contact &&
      isValid &&
      (setHowToContact({
        contactWay:
          contactPath.substring(0, contactPath.indexOf(pathSeparator)) ||
          contactPath,
        contactMethod: contactPath.includes(pathSeparator)
          ? contactPath.substring(
              contactPath.indexOf(pathSeparator) + pathSeparator.length
            )
          : '',
        [currentVerification.validationType]: contact,
        leadPage: router.asPath,
        question: howToContact?.question?.replace(/\n/g, ' ')
      }),
      resetContact(),
      setContactPath('submit'))) ||
    inputRef.current?.focus()

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
    submit,
    isFormShown,
    togleFormShown,
    isDirty,
    setIsDirty,
    prev,
    inputRef,
    currentVerification
  }
}
