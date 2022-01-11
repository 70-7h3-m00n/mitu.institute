import stls from '@/styles/components/inputs/InputName.module.sass'
import { TypeClassNames, TypeInput } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeInputNameProps = TypeClassNames & TypeInput

const InputName = ({ classNames, register, error }: TypeInputNameProps) => {
  const maxLength = 32
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <input
        type='text'
        className={stls.input}
        placeholder='Имя'
        aria-label={'Введите Ваше имя'}
        {...register('name', {
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

export default InputName
