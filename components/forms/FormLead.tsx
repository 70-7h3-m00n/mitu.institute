import stls from '@/styles/components/forms/FormLead.module.sass'
import { TypeClassNames, TypeFormAlphaValues, TypeIsPopup } from '@/types/index'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import cn from 'classnames'
import { useForm } from 'react-hook-form'
import { getClassNames, onSubmitForm } from '@/helpers/index'
import {
  InputName,
  InputPhone,
  InputEmail,
  InputSubmit
} from '@/components/inputs'

type TypeFormLeadProps = TypeClassNames & TypeIsPopup

const FormLead = ({ classNames, isPopup }: TypeFormLeadProps) => {
  const { asPath } = useRouter()
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
    <form
      method='POST'
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }
      onSubmit={handleSubmit(formValues =>
        onSubmitForm({ formValues, asPath })
      )}>
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
  )
}

export default FormLead
