import { CreateSubmit } from '../types'
import onSubmitForm from './onSubmitForm'
import { v4 as uuidv4 } from 'uuid'

export const createSubmit: CreateSubmit =
  ({ setContactPath, howToContact, routeFront }) =>
  e => {
    e.preventDefault()
    const id = uuidv4()
    onSubmitForm({
      howToContact,
      id,
      routeFront,
      setContactPath
    })
  }
