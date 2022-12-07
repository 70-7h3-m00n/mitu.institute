import { useRouter } from 'next/router'
import { SetStateAction } from 'react'
import { pathSeparator } from '../config'
import { UseCreateHandleBeforeSubmit } from '../types'
import { HowToContact } from '../types/howToContact'

export const useCreateHandleBeforeSubmit: UseCreateHandleBeforeSubmit = ({
  addFields,
  contact,
  contactPath,
  setHowToContact,
  currentVerification,
  isValid
}) => {
  const router = useRouter()
  return () => {
    if (!isValid) return
    const createLeadData: SetStateAction<HowToContact> = prev =>
      Object.fromEntries(
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
          question: prev?.question?.replace(/\n/g, ' ') || '',
          ...addFields
        }).filter(prop => prop[1])
      )
    setHowToContact(createLeadData)
  }
}
