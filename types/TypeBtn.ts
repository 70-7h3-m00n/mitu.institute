import {
  TypeClassNames,
  TypeChildren,
  TypeBtnTag,
  TypeBtnType,
  TypeBtnHref,
  TypeBtnDisabled,
  TypeAriaLabel,
  TypeBtnVariant
} from '@/types/index'

type TypeBtn = TypeClassNames &
  TypeChildren &
  TypeBtnTag &
  TypeBtnType &
  TypeBtnHref &
  TypeBtnDisabled &
  TypeAriaLabel &
  TypeBtnVariant

export default TypeBtn
