import React from 'react'
import { AskModal } from './components'
import { useAskFormState, useOnSubmitForm } from './hooks'
import { AddFields, TypeRoutesFront } from './types'

interface Props {
  addFields?: AddFields
  at?: Record<string, string>
  routesFront?: TypeRoutesFront
}

export const AskForm: React.FC<Props> = ({
  addFields,
  routesFront
}): JSX.Element => {
  const askFormState = useAskFormState(addFields)
  const { howToContact, contactPath } = askFormState
  useOnSubmitForm(howToContact, contactPath, routesFront)
  return <AskModal askFormState={askFormState} />
}

export default AskForm
