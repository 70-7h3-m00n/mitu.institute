import stls from '@/styles/components/btns/BtnImgPopupTrigger.module.sass'
import {
  TypeAriaLabel,
  TypeChildren,
  TypeClassNames,
  TypeOnClick
} from '@/types/index'
import { ReactNode } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeBtnImgPopupTriggerProps = TypeClassNames &
  TypeChildren &
  TypeAriaLabel &
  TypeOnClick & {
    label: ReactNode
  }

const BtnImgPopupTrigger = ({
  classNames,
  children,
  ariaLabel,
  onClick,
  label
}: TypeBtnImgPopupTriggerProps) => {
  return (
    <button
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-label={ariaLabel}
      onClick={onClick}>
      <span className={stls.img}>{children}</span>
      <span className={stls.label}>{label}</span>
    </button>
  )
}

export default BtnImgPopupTrigger
