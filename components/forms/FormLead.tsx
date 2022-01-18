import stls from '@/styles/components/forms/FormLead.module.sass'
import { TypeClassNames, TypeFormAlphaValues, TypeIsPopup } from '@/types/index'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { useForm } from 'react-hook-form'
import { getClassNames, onSubmitForm } from '@/helpers/index'
import { GeneralPopup } from '@/components/general'
import { PopupLoader, PopupThankyou } from '@/components/popups'
import {
  InputName,
  InputPhone,
  InputEmail,
  InputSubmit
} from '@/components/inputs'

type TypeFormLeadProps = TypeClassNames & TypeIsPopup

const FormLead = ({ classNames, isPopup }: TypeFormLeadProps) => {
  const { asPath } = useRouter()

  const [loaderIsOpen, setLoaderIsOpen] = useState(false)
  const [thanksIsOpen, setThanksIsOpen] = useState(false)

  const programTitle = undefined

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors }
  } = useForm<TypeFormAlphaValues>()

  useEffect(() => {
    isPopup && setFocus('name')
  }, [isPopup, setFocus])

  return (
    <>
      <Popup
        open={loaderIsOpen}
        closeOnDocumentClick
        modal
        nested
        onClose={() => setLoaderIsOpen(false)}>
        <GeneralPopup close={() => setLoaderIsOpen(false)} slighter>
          <PopupLoader />
        </GeneralPopup>
      </Popup>
      <Popup
        open={thanksIsOpen}
        closeOnDocumentClick
        modal
        nested
        onClose={() => setThanksIsOpen(false)}>
        <GeneralPopup close={() => setThanksIsOpen(false)} slighter>
          <PopupThankyou />
        </GeneralPopup>
      </Popup>
      <form
        method='POST'
        className={
          cn([stls.container], getClassNames({ classNames })) || undefined
        }
        onSubmit={handleSubmit(formValues => {
          setLoaderIsOpen(true)
          onSubmitForm({
            formValues,
            asPath,
            programTitle,
            reset,
            setLoaderIsOpen,
            setThanksIsOpen
          })
        })}>
        <div className={stls.inputs}>
          <InputName
            register={register}
            error={errors.name}
            classNames={[stls.input]}
          />
          <InputPhone
            register={register}
            error={errors.phone}
            classNames={[stls.input]}
          />
          <InputEmail
            register={register}
            error={errors.email}
            classNames={[stls.input, stls.inputEmail]}
          />
          <InputSubmit errors={errors} classNames={[stls.input, stls.submit]} />
        </div>
        <p className={stls.agreement}>
          Отправляя заявку, Вы соглашаетесь с политикой конфиденциальности и
          условиями обработки персональных данных
        </p>
      </form>
    </>
  )
}

export default FormLead
