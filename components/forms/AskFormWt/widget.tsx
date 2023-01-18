import { useEffect, useState } from 'react'
import { AskModal } from './components'
import { useAskFormState } from './hooks'
import { AddFields, TypeRoutesFront } from './types'

interface Props {
  addFields?: AddFields
  at?: Record<string, string>
  routeFront?: TypeRoutesFront
}

export const AskForm = ({
  addFields,
  routeFront
}: Props): JSX.Element | null => {
  const [isFormLoaded, setIsFormLoaded] = useState(false)
  const askFormState = useAskFormState({ addFields, routeFront })
  useEffect(() => setIsFormLoaded(true), [])
  if (!isFormLoaded) return null
  return <AskModal askFormState={askFormState} />
}

export default AskForm
