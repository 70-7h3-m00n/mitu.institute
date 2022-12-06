import React from 'react'
import { TbMessages } from 'react-icons/tb'
import { FormModal } from '../../molecules'
import stls from './AskModal.module.sass'
import cn from 'classnames'
import { AskFormState } from '../../../types'

interface Props {
  askFormState: AskFormState
}

const AskModal: React.FC<Props> = ({ askFormState }): JSX.Element => {
  const { isFormShown, ...formState } = askFormState
  const { togleFormShown } = formState
  return (
    <section
      className={cn(stls.container, isFormShown && stls.overlay)}
      onMouseDown={togleFormShown}>
      {isFormShown ? (
        <FormModal {...formState} />
      ) : (
        <TbMessages
          className={stls.messages}
          onClick={togleFormShown}
          strokeWidth={1}
          viewBox='-5 -5 33 33'
        />
      )}
    </section>
  )
}

export default AskModal
