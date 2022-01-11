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
      <input
        type='text'
        className={stls.input}
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
      <p className={stls.error}>{error && error.message}</p>
    </div>
  )
}

export default InputEmail
