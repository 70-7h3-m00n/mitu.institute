import { CreateSubmit } from '../types'
import onSubmitForm from './onSubmitForm'
import { v4 as uuidv4 } from 'uuid'

export const createSubmit: CreateSubmit =
  ({ setContactPath, howToContact, routeFront, inputRef, isValid }) =>
  e => {
    e.preventDefault()
    if (!isValid) return inputRef.current?.focus()
    const id = uuidv4()
    onSubmitForm({
      howToContact,
      id,
      routeFront,
      setContactPath
    })
  }
