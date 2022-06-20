import {
  TypeLibProgramTimenpriceStudyMonthsDuration,
  TypeLibProgramTimenpriceStudyHours,
  TypeLibProgramTimenpricePrice,
  TypeLibProgramTimenpriceDiscount
} from '@/types/index'

type TypeLibProgramTimenprice = {
  studyMonthsDuration?: TypeLibProgramTimenpriceStudyMonthsDuration
  studyHours?: TypeLibProgramTimenpriceStudyHours
  price?: TypeLibProgramTimenpricePrice
  discount?: TypeLibProgramTimenpriceDiscount
}[]

export default TypeLibProgramTimenprice
