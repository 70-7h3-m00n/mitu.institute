import React from 'react'
import { TbMessages } from 'react-icons/tb'
import { useFormContext } from '../../../hooks'
import { FormModal } from '../../molecules'
import stls from './AskModal.module.sass'
import cn from 'classnames'

const AskModal = () => {
  const { isFormHidden, handleHideForm } = useFormContext()
  return (
    <div
      className={cn(stls.container, !isFormHidden && stls.overlay)}
      onMouseDown={handleHideForm}>
      {!isFormHidden ? (
        <FormModal />
      ) : (
        <TbMessages
          color={'white'}
          className={stls.messages}
          onClick={handleHideForm}
          strokeWidth={1}
          viewBox='-5 -5 33 33'
        />
      )}
    </div>
  )
}

export default AskModal
