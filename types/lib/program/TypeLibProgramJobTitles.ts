import {
  TypeLibGeneralPicture,
  TypeLibProgramJobTitlesPosition,
  TypeLibProgramJobTitlesSalary
} from '@/types/index'

type TypeLibProgramJobTitles = {
  picture?: TypeLibGeneralPicture
  position?: TypeLibProgramJobTitlesPosition
  salary?: TypeLibProgramJobTitlesSalary
}[]

export default TypeLibProgramJobTitles
