import stls from '@/styles/components/inputs/InputPhone.module.sass'
import { TypeClassNames, TypeInput, TypeVariantForm } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeInputPhoneProps = TypeClassNames & TypeInput & TypeVariantForm

const InputPhone = ({
  classNames,
  register,
  error,
  variant
}: TypeInputPhoneProps) => {
  const minLength = 5
  return (
    <div
      className={
        cn(
          [stls.container],
          { [stls.containerVariantBeta]: variant === 'beta' },
          getClassNames({ classNames })
        ) || undefined
      }>
      <div className={cn(stls.inputGroup, { [stls.inputGroupError]: error })}>
        <input
          type='tel'
          className={cn(stls.input, { [stls.inputError]: error })}
          placeholder='Номер телефона'
          aria-label={'Введите Ваш номер телефона'}
          {...register('phone', {
            required: '*Пожалуйста, введите номер телефона',
            minLength: {
              value: minLength,
              message: `*Пожалуйста, введите больше, чем ${minLength} символов`
            }
          })}
        />
      </div>
      <p className={stls.error}>{error && error.message}</p>
    </div>
  )
}

export default InputPhone
