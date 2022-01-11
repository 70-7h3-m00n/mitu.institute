import stls from '@/styles/components/forms/FormLead.module.sass'
import { TypeClassNames, TypeFormAlphaValues } from '@/types/index'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { useForm } from 'react-hook-form'
import { getClassNames, onSubmitForm } from '@/helpers/index'
import {
  InputName,
  InputPhone,
  InputEmail,
  InputSubmit
} from '@/components/inputs'

type TypeFormLeadProps = TypeClassNames

const FormLead = ({ classNames }: TypeFormLeadProps) => {
  const { asPath } = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TypeFormAlphaValues>()

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
        <InputName register={register} error={errors.name} />
        <InputPhone register={register} error={errors.phone} />
        <InputEmail register={register} error={errors.email} />
        <InputSubmit errors={errors} />
      </div>
      <p className={stls.agreement}>
        Отправляя заявку, Вы соглашаетесь с политикой конфиденциальности и
        условиями обработки персональных данных
      </p>
    </form>
  )
}

export default FormLead
