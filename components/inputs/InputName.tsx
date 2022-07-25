import stls from '@/styles/components/inputs/InputName.module.sass'
import { TypeClassNames, TypeInput, TypeVariantForm } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeInputNameProps = TypeClassNames & TypeInput & TypeVariantForm

const InputName = ({
  classNames,
  register,
  error,
  variant
}: TypeInputNameProps) => {
  const at = useAt()

  const maxLength = 32

  const translations = {
    placeholder: at.uz ? 'Ism' : 'Имя',
    ariaLabel: at.uz ? 'Ismingizni kiriting' : 'Введите Ваше имя',
    maxLengthMsg: at.uz
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
          {...register('name', {
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

export default InputName
