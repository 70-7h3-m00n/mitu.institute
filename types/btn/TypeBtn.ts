import {
  TypeClassNames,
  TypeChildren,
  TypeBtnTag,
  TypeBtnType,
  TypeBtnHref,
  TypeOnClick,
  TypeBtnDisabled,
  TypeAriaLabel,
  TypeBtnAlphaVariant
} from '@/types/index'

type TypeBtn = TypeClassNames &
  TypeChildren &
  TypeBtnTag &
  TypeBtnType &
  TypeBtnHref &
  TypeOnClick &
  TypeBtnDisabled &
  TypeAriaLabel &
  TypeBtnAlphaVariant

export default TypeBtn
