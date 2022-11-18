import React, { useState } from 'react'
import { createContext } from 'react'
import { waysToContact } from './data'
import { FormContext } from './types'
import { useInput } from './hooks'

const initialFunction = () => {}
const initialValue = ''
const initialContext = {
  isFormHidden: true,
  handleHideForm: initialFunction,
  question: initialValue,
  handleQuestion: initialFunction,
  resetQuestion: initialFunction,
  phoneNumber: initialValue,
  handlePhoneNumber: initialFunction,
  resetPhoneNumber: initialFunction,
  email: initialValue,
  handleEmail: initialFunction,
  resetEmail: initialFunction,
  vkID: initialValue,
  handleVkID: initialFunction,
  resetVkID: initialFunction,
  waysToContact
}

export const formContext = createContext<FormContext>(initialContext)

const FormDataProvider: React.FC = ({ children }): JSX.Element => {
  const [isFormHidden, setIsFormHidden] = useState(true)
  const handleHideForm = () => setIsFormHidden(!isFormHidden)
  const [question, handleQuestion, resetQuestion] = useInput(initialValue)
  const [phoneNumber, handlePhoneNumber, resetPhoneNumber] =
    useInput(initialValue)
  const [email, handleEmail, resetEmail] = useInput(initialValue)
  const [vkID, handleVkID, resetVkID] = useInput(initialValue)
  return (
    <formContext.Provider
      value={{
        isFormHidden,
        handleHideForm,
        question,
        handleQuestion,
        resetQuestion,
        phoneNumber,
        handlePhoneNumber,
        resetPhoneNumber,
        email,
        handleEmail,
        resetEmail,
        vkID,
        handleVkID,
        resetVkID,
        waysToContact
      }}>
      {children}
    </formContext.Provider>
  )
}

export default FormDataProvider
