import stls from '@/styles/components/inputs/InputEmail.module.sass'
import { TypeClassNames, TypeInput, TypeVariantForm } from '@/types/index'
import cn from 'classnames'
import { emailRegex } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeInputEmailProps = TypeClassNames & TypeInput & TypeVariantForm

const InputEmail = ({
  classNames,
  register,
  error,
  variant
}: TypeInputEmailProps) => {
  const at = useAt()

  const maxLength = 64

  const translations = {
    placeholder: at.en ? 'Email' : at.uz ? 'Email' : 'Email',
    ariaLabel: at.en
      ? 'Please type in your email'
      : at.uz
      ? 'Elektron pochtangizni kiriting'
      : 'Введите Вашу электронную почту',
    patternMsg: at.en
      ? 'Please type in a correct email'
      : at.uz
      ? "Iltimos, to'g'ri elektron pochta manzilini kiriting"
      : 'Пожалуйста, введите корректный email',
    maxLengthMsg: at.en
      ? `*Please type in less than ${maxLength} symbols`
      : at.uz
      ? `*Iltimos, ${maxLength} belgidan kamroq kiriting`
      : `*Пожалуйста, введите меньше, чем ${maxLength} символа`
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
          type='text'
          className={cn(stls.input, { [stls.inputError]: error })}
          placeholder={translations.placeholder}
          aria-label={translations.ariaLabel}
          {...register('email', {
            pattern: {
              value: emailRegex,
              message: translations.patternMsg
            },
            maxLength: {
              value: maxLength,
              message: translations.maxLengthMsg
            }
          })}
        />
      </div>
      <p className={stls.error}>{error && error.message}</p>
    </div>
  )
}

export default InputEmail
