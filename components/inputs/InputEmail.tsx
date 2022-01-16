import stls from '@/styles/components/inputs/InputEmail.module.sass'
import { TypeClassNames, TypeInput } from '@/types/index'
import cn from 'classnames'
import { emailRegex } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeInputEmailProps = TypeClassNames & TypeInput

const InputEmail = ({ classNames, register, error }: TypeInputEmailProps) => {
  const maxLength = 64
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <div className={cn(stls.inputGroup, { [stls.inputGroupError]: error })}>
        <input
          type='text'
          className={cn(stls.input, { [stls.inputError]: error })}
          placeholder='Email'
          aria-label={'Введите Вашу электронную почту'}
          {...register('email', {
            pattern: {
              value: emailRegex,
              message: 'Пожалуйста, введите корректный email'
            },
            maxLength: {
              value: maxLength,
              message: `*Пожалуйста, введите меньше, чем ${maxLength} символа`
            }
          })}
        />
      </div>
      <p className={stls.error}>{error && error.message}</p>
    </div>
  )
}

export default InputEmail
