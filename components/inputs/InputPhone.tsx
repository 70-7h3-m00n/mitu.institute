import stls from '@/styles/components/inputs/InputPhone.module.sass'
import { TypeClassNames, TypeInput, TypeVariantForm } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeInputPhoneProps = TypeClassNames & TypeInput & TypeVariantForm

const InputPhone = ({
  classNames,
  register,
  error,
  variant
}: TypeInputPhoneProps) => {
  const at = useAt()

  const minLength = 5

  const translations = {
    placeholder: at.en
      ? 'Phone number'
      : at.uz
      ? 'Telefon raqami'
      : 'Номер телефона',
    ariaLabel: at.en
      ? 'Type in your phone number'
      : at.uz
      ? 'Telefon raqamingizni kiriting'
      : 'Введите Ваш номер телефона',
    requiredMsg: at.en
      ? '*Please type in a phone number'
      : at.uz
      ? '*Iltimos, telefon raqamini kiriting'
      : '*Пожалуйста, введите номер телефона',
    minLengthMsg: at.en
      ? `Please type in more than ${minLength} symbols`
      : at.uz
      ? `*Iltimos, ${minLength} belgidan ko'proq narsani kiriting`
      : `*Пожалуйста, введите больше, чем ${minLength} символов`
  }

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
          placeholder={translations.placeholder}
          aria-label={translations.ariaLabel}
          {...register('phone', {
            required: translations.requiredMsg,
            minLength: {
              value: minLength,
              message: translations.minLengthMsg
            }
          })}
        />
      </div>
      <p className={stls.error}>{error && error.message}</p>
    </div>
  )
}

export default InputPhone
