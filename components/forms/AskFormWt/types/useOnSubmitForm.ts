import { HowToContact } from './howToContact'
import TypeRoutesFront from './TypeRoutesFront'

export type OnSubmitForm = (
  howToContact?: HowToContact,
  contactPath?: string,
  routesFront?: TypeRoutesFront
) => void
