import {
  TypeLibGeneralPicture,
  TypeLibProgramTeachersName,
  TypeLibProgramTeachersAchievements
} from '@/types/index'

type TypeLibProgramTeachers = {
  portrait?: TypeLibGeneralPicture
  name?: TypeLibProgramTeachersName
  achievements?: TypeLibProgramTeachersAchievements
}[]

export default TypeLibProgramTeachers
