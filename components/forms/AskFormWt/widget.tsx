import React from 'react'
import { AskModal } from './components'
import FormDataProvider from './context'

interface Props {
  messageIconBgc?: string
  messageIconColor?: string
}

export const AskForm: React.FC<Props> = (): JSX.Element => {
  return (
    <FormDataProvider>
      <AskModal />
    </FormDataProvider>
  )
}

export default AskForm
