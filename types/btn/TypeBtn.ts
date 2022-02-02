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

type TypeBtn = TypeClassNames &
  TypeChildren &
  TypeBtnTagWithLink &
  TypeBtnType &
  TypeBtnHref &
  TypeOnClick &
  TypeBtnDisabled &
  TypeAriaLabel &
  TypeBtnAlphaVariant & {
    scroll?: boolean
  }

export default TypeBtn
