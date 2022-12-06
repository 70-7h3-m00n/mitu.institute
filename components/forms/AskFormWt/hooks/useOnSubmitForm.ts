import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { OnSubmitForm } from '../types'
import { onSubmitForm } from '../utils'

export const useOnSubmitForm: OnSubmitForm = (
  howToContact,
  contactPath,
  routesFront
) => {
  const id = uuidv4()
  useEffect(() => {
    contactPath?.includes('submit') &&
      onSubmitForm({ howToContact, id, routesFront })
  }, [contactPath, howToContact, id, routesFront])
}
