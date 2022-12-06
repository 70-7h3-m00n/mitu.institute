import React from 'react'
import { AskFormState } from '../../../types'
import stls from './FormInput.module.sass'
import cn from 'classnames'
import { useValidation } from '../../../hooks/useValidation'

type Props = Pick<
  AskFormState,
  | 'contactPath'
  | 'isStageSubmit'
  | 'howToContact'
  | 'setHowToContact'
  | 'contact'
  | 'handleContact'
  | 'isValid'
  | 'setIsValid'
  | 'isDirty'
  | 'setIsDirty'
  | 'inputRef'
  | 'currentVerification'
>

const FormInput: React.FC<Props> = ({
  contactPath,
  contact,
  handleContact,
  howToContact,
  setHowToContact,
  isValid,
  setIsValid,
  isStageSubmit,
  isDirty,
  setIsDirty,
  inputRef,
  currentVerification
}): JSX.Element => {
  const whatDataToEnter = {
    phone: 'номер',
    email: 'электронную почту',
    vk: 'ID ВКонтакте'
  }
  const errors = {
    phone: '*Номер указан неверно',
    email: '*Адрес почты указан неверно',
    vk: '*ID ВКонтакте указан неверно'
  }
  const placeholder = `Введите ${
    whatDataToEnter[currentVerification?.validationType]
  }`
  const handleDirty = () => setIsDirty(true)
  useValidation(contact, currentVerification, setIsValid)
  return (
    <>
      {!contactPath ? (
        <textarea
          autoFocus
          placeholder='Напишите вопрос...'
          value={howToContact?.question}
          onChange={e => {
            setHowToContact({
              question: e.target.value
            })
          }}
          className={stls.questionTextarea}
        />
      ) : (
        isStageSubmit && (
          <div className={stls.inputContainer}>
            <input
              ref={inputRef}
              type='text'
              className={stls.input}
              name={currentVerification.validationType}
              value={contact}
              onChange={handleContact}
              onFocus={handleDirty}
            />
            <span
              className={cn(
                stls.inputPlaceholder,
                isDirty && !isValid
                  ? stls.inputPlaceholderSmallRed
                  : isDirty && stls.inputPlaceholderSmallBlack
              )}>
              {isValid || !isDirty || !contact
                ? placeholder
                : errors[currentVerification.validationType]}
            </span>
          </div>
        )
      )}
    </>
  )
}

export default FormInput
