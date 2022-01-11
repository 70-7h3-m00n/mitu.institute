import stls from '@/styles/components/inputs/InputSubmit.module.sass'
import { TypeClassNames, TypeFormAlphaValues } from '@/types/index'
import cn from 'classnames'
import { FieldError } from 'react-hook-form'
import { getClassNames } from '@/helpers/index'

type TypeInputSubmitProps = TypeClassNames & {
  errors: {
    [key in keyof TypeFormAlphaValues]?: FieldError | undefined
  }
}

const InputSubmit = ({ classNames, errors }: TypeInputSubmitProps) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <button
        type='submit'
        className={stls.btn}
        aria-label={'Оставить заявку'}
        disabled={!!errors.name || !!errors.phone || !!errors.email}>
        Оставить заявку
      </button>
    </div>
  )
}

export default InputSubmit
