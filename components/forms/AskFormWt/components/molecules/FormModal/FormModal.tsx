import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { useFormContext } from '../../../hooks'
import stls from './FormModal.module.sass'

const FormModal = () => {
  const { question, handleQuestion, handleHideForm } = useFormContext()
  return (
    <>
      <form className={stls.form} onMouseDown={e => e.stopPropagation()}>
        <IoMdClose
          color='#AEAEAE'
          className={stls.close}
          onClick={handleHideForm}
        />
        <textarea
          autoFocus
          placeholder='Напишите вопрос...'
          value={question}
          onChange={handleQuestion}
          className={stls.questionTextarea}
        />
      </form>
    </>
  )
}

export default FormModal
