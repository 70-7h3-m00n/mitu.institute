import React from 'react'
import { AskModal } from './components'
import { useAskFormState } from './hooks'
import { AddFields, TypeRoutesFront } from './types'

interface Props {
  addFields?: AddFields
  at?: Record<string, string>
  routeFront?: TypeRoutesFront
}

export const AskForm: React.FC<Props> = ({
  addFields,
  routeFront
}): JSX.Element => {
  const askFormState = useAskFormState({ addFields, routeFront })
  return <AskModal askFormState={askFormState} />
}

export default AskForm
