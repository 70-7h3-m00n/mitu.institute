import React from 'react'
import { IoMdClose } from 'react-icons/io'
import stls from './FormModal.module.sass'
import { AskFormState } from '../../../types'
import { Buttons, ContactTitle, FormInput, FormSubmitted } from '../../atoms'
import { v4 as uuidv4 } from 'uuid'
import { submitName } from '../../../config'

type Props = Omit<AskFormState, 'isFormShown'>

const FormModal: React.FC<Props> = ({
  contact,
  handleContact,
  contactPath,
  setContactPath,
  howToContact,
  setHowToContact,
  togleFormShown,
  isStageSubmit,
  isValid,
  setIsValid,
  handleBeforeSubmit,
  isDirty,
  setIsDirty,
  prev,
  inputRef,
  currentVerification,
  submit
}): JSX.Element => {
  const id = uuidv4()
  return (
    <form
      noValidate
      className={stls.wrap}
      onMouseDown={e => e.stopPropagation()}
      onSubmit={submit}>
      <IoMdClose className={stls.close} onClick={togleFormShown} />
      {contactPath.includes(submitName) ? (
        <FormSubmitted />
      ) : (
        <>
          {contactPath && (
            <ContactTitle contactPath={contactPath} prev={prev} />
          )}
          <FormInput
            {...{
              contact,
              handleContact,
              contactPath,
              howToContact,
              setHowToContact,
              isStageSubmit,
              isValid,
              setIsValid,
              isDirty,
              setIsDirty,
              inputRef,
              currentVerification
            }}
          />
          <Buttons
            {...{
              contactPath,
              setContactPath,
              isStageSubmit,
              handleBeforeSubmit,
              isDirty,
              isValid
            }}
          />
        </>
      )}
    </form>
  )
}

export default FormModal
