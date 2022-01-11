import stls from '@/styles/components/inputs/InputPhone.module.sass'
import { TypeClassNames, TypeInput, TypeFormAlphaValues } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeInputPhoneProps = TypeClassNames & TypeInput

const InputPhone = ({ classNames, register, error }: TypeInputPhoneProps) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <input
        type='tel'
        className={stls.input}
        placeholder='Номер телефона'
        aria-label={'Введите Ваш номер телефона'}
        {...register('phone', {
          required: '*Пожалуйста, введите номер телефона',
          minLength: {
            value: 5,
            message: '*Пожалуйста, введите больше, чем 5 символов'
          }
        })}
      />
      <p className={stls.error}>{error && error.message}</p>
    </div>
  )
}

export default InputPhone
