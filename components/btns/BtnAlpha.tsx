import stls from '@/styles/components/btns/BtnAlpha.module.sass'
import {
  TypeClassNames,
  TypeChildren,
  TypeBtnType,
  TypeBtnDisabled,
  TypeAriaLabel,
  TypeBtnReverse
} from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeBtnAlphaProps = TypeClassNames &
  TypeChildren &
  TypeBtnType &
  TypeBtnDisabled &
  TypeAriaLabel &
  TypeBtnReverse

const BtnAlpha = ({
  classNames,
  children,
  type,
  disabled,
  ariaLabel,
  reverse
}: TypeBtnAlphaProps) => {
  return (
    <button
      className={
        cn(
          stls.container,
          {
            [stls.regular]: !reverse,
            [stls.reverse]: reverse,
            [stls.disabled]: disabled
          },
          getClassNames({ classNames })
        ) || undefined
      }
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      aria-disabled={disabled}>
      {children}
    </button>
  )
}

export default BtnAlpha
