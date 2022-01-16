import {
  TypeClassNames,
  TypeChildren,
  TypeBtnTag,
  TypeBtnType,
  TypeBtnHref,
  TypeBtnOnClick,
  TypeBtnDisabled,
  TypeAriaLabel,
  TypeBtnVariant
} from '@/types/index'

type TypeBtn = TypeClassNames &
  TypeChildren &
  TypeBtnTag &
  TypeBtnType &
  TypeBtnHref &
  TypeBtnOnClick &
  TypeBtnDisabled &
  TypeAriaLabel &
  TypeBtnVariant

export default TypeBtn
