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
      <div className={stls.img}>{children}</div>
      <div className={stls.label}>{label}</div>
    </button>
  )
}

export default BtnImgPopupTrigger
