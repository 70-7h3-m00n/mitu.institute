import { AddFields } from './AddFields'
import { AskFormState } from './askFormState'
import TypeRoutesFront from './TypeRoutesFront'

interface Props {
  addFields?: AddFields
  routeFront?: TypeRoutesFront
}

export type UseAskFormState = (prpos: Props) => AskFormState
