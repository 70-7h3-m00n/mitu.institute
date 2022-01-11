import stls from '@/styles/components/inputs/InputEmail.module.sass'
import { TypeClassNames, TypeInput } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeInputEmailProps = TypeClassNames & TypeInput

const InputEmail = ({ classNames, register, error }: TypeInputEmailProps) => {
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
            value:
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
            message: 'Пожалуйста, введите корректный email'
          },
          maxLength: {
            value: 64,
            message: '*Пожалуйста, введите меньше, чем 64 символа'
          }
        })}
      />
      <p className={stls.error}>{error && error.message}</p>
    </div>
  )
}

export default InputEmail
