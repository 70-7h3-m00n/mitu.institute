import {
  TypeLibProgramTimenpriceStudyMonthsDuration,
  TypeLibProgramTimenpricePrice,
  TypeLibProgramTimenpriceDiscount
} from '@/types/index'

type TypeLibProgramTimenprice = {
  studyMonthsDuration?: TypeLibProgramTimenpriceStudyMonthsDuration
  price?: TypeLibProgramTimenpricePrice
  discount?: TypeLibProgramTimenpriceDiscount
}[]

export default TypeLibProgramTimenprice
