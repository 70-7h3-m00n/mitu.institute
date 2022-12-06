import React from 'react'
import { IoMdClose } from 'react-icons/io'
import stls from './FormModal.module.sass'
import { AskFormState } from '../../../types'
import { Buttons, ContactTitle, FormInput, FormSubmitted } from '../../atoms'
import { onSubmitForm } from '../../../utils'
import { v4 as uuidv4 } from 'uuid'

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
  submit,
  isDirty,
  setIsDirty,
  prev,
  inputRef,
  currentVerification
}): JSX.Element => {
  const id = uuidv4()
  return (
    <form
      noValidate
      className={stls.wrap}
      onMouseDown={e => e.stopPropagation()}
      onSubmit={e => e.preventDefault()}>
      <IoMdClose className={stls.close} onClick={togleFormShown} />
      {contactPath.includes('submit') ? (
        <FormSubmitted />
      ) : (
        <>
          {contactPath && (
            <ContactTitle contactPath={contactPath} prev={prev} />
          )}
          <FormInput
            contact={contact}
            handleContact={handleContact}
            contactPath={contactPath}
            howToContact={howToContact}
            setHowToContact={setHowToContact}
            isStageSubmit={isStageSubmit}
            isValid={isValid}
            setIsValid={setIsValid}
            isDirty={isDirty}
            setIsDirty={setIsDirty}
            inputRef={inputRef}
            currentVerification={currentVerification}
          />
          <Buttons
            contactPath={contactPath}
            setContactPath={setContactPath}
            isStageSubmit={isStageSubmit}
            submit={submit}
            isDirty={isDirty}
            isValid={isValid}
          />
        </>
      )}
    </form>
  )
}

export default FormModal
