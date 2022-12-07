import { pathSeparator } from '../config'
import { CreateHandleBeforeSubmit } from '../types'

export const createHandleBeforeSubmit: CreateHandleBeforeSubmit =
  ({
    addFields,
    contact,
    contactPath,
    howToContact,
    router,
    setHowToContact,
    currentVerification,
    isValid,
    inputRef
  }) =>
  () => {
    if (!contact || !isValid) return inputRef.current?.focus()
    const leadData = Object.fromEntries(
      Object.entries({
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
        question: howToContact?.question?.replace(/\n/g, ' ') || '',
        ...addFields
      }).filter(prop => prop[1])
    )
    setHowToContact(leadData)
  }
