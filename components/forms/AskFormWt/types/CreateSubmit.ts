import { Dispatch } from 'react'
import { HowToContact } from './howToContact'
import { Submit } from './Submit'
import TypeRoutesFront from './TypeRoutesFront'

interface CreateSubmitProps {
  howToContact: HowToContact
  routeFront?: TypeRoutesFront
  setContactPath: Dispatch<string>
}

export type CreateSubmit = (props: CreateSubmitProps) => Submit
