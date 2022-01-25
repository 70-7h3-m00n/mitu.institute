import {
  TypeLibGeneralPicture,
  TypeLibProgramTeachersName,
  TypeLibProgramTeachersSpecialization
} from '@/types/index'

type TypeLibProgramTeachers = {
  portrait?: TypeLibGeneralPicture
  name?: TypeLibProgramTeachersName
  specialization?: TypeLibProgramTeachersSpecialization
}[]

export default TypeLibProgramTeachers
