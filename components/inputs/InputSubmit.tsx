import stls from '@/styles/components/inputs/InputSubmit.module.sass'
import {
  TypeClassNames,
  TypeVariantForm,
  TypeFormAlphaValues
} from '@/types/index'
import cn from 'classnames'
import { FieldError } from 'react-hook-form'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { BtnAlpha } from '@/components/btns'

type TypeInputSubmitProps = TypeClassNames &
  TypeVariantForm & {
    errors: {
      [key in keyof TypeFormAlphaValues]?: FieldError | undefined
    }
  }

const InputSubmit = ({ classNames, variant, errors }: TypeInputSubmitProps) => {
  const at = useAt()

  const isError = !!errors.name || !!errors.phone || !!errors.email

  const translations = {
    btnValue: at.uz ? "So'rov qoldiring" : 'Оставить заявку'
  }

  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <BtnAlpha
        type='submit'
        variant={variant === 'beta' ? 'gamma-reverse' : 'alpha'}
        ariaLabel={translations.btnValue}>
        {translations.btnValue}
      </BtnAlpha>
    </div>
  )
}

export default InputSubmit
