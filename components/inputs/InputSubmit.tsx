import stls from '@/styles/components/inputs/InputSubmit.module.sass'
import { TypeClassNames, TypeFormAlphaValues } from '@/types/index'
import cn from 'classnames'
import { FieldError } from 'react-hook-form'
import { getClassNames } from '@/helpers/index'
import { BtnAlpha } from '@/components/btns'

type TypeInputSubmitProps = TypeClassNames & {
  errors: {
    [key in keyof TypeFormAlphaValues]?: FieldError | undefined
  }
}

const InputSubmit = ({ classNames, errors }: TypeInputSubmitProps) => {
  const isError = !!errors.name || !!errors.phone || !!errors.email

  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <BtnAlpha type='submit' ariaLabel='Оставить заявку'>
        Оставить заявку
      </BtnAlpha>
    </div>
  )
}

export default InputSubmit
