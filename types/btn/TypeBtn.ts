import {
  TypeClassNames,
  TypeChildren,
  TypeBtnTagWithLink,
  TypeBtnType,
  TypeBtnHref,
  TypeOnClick,
  TypeBtnDisabled,
  TypeAriaLabel,
  TypeBtnAlphaVariant
} from '@/types/index'
import { HTMLAttributeAnchorTarget } from 'react'

type TypeBtn = TypeClassNames &
  TypeChildren &
  TypeBtnTagWithLink &
  TypeBtnType &
  TypeBtnHref &
  TypeOnClick &
  TypeBtnDisabled &
  TypeAriaLabel &
  TypeBtnAlphaVariant & {
    target?: HTMLAttributeAnchorTarget
    scroll?: boolean
  }

export default TypeBtn
