import stls from '@/styles/components/forms/FormAlpha.module.sass'
import { TypeClassNames, TypeFormValuesAlpha } from '@/types/index'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { useForm } from 'react-hook-form'
import { getClassNames, onSubmitForm } from '@/helpers/index'
import { InputName } from '@/components/inputs'

type TypeFormAlphaProps = TypeClassNames

const FormAlpha = ({ classNames }: TypeFormAlphaProps) => {
  const { asPath } = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TypeFormValuesAlpha>()

  return (
    <form
      method='POST'
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }
      onSubmit={handleSubmit(formValues =>
        onSubmitForm({ formValues, asPath })
      )}>
      123
    </form>
  )
}

export default FormAlpha
