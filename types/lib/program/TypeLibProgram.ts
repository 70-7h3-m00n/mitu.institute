import {
  TypeLibProgramTitle,
  TypeLibProgramSlug,
  TypeLibProgramDescription,
  TypeLibProgramTimenprice,
  TypeLibProgramStudyForm,
  TypeLibProgramForWhom,
  TypeLibGeneralPicture,
  TypeLibProgramWhatYouWillLearn,
  TypeLibProgramHowProcessGoes,
  TypeLibProgramShortContents,
  TypeLibProgramJobTitles,
  TypeLibProgramTeachers,
  TypeLibProgramQuestions,
  TypeLibProgramStudyField,
  TypeLibProgramCategory,
  TypeLibProgramQualification
} from '@/types/index'

type TypeLibProgram = {
  id?: string
  title?: TypeLibProgramTitle
  slug?: TypeLibProgramSlug
  description?: TypeLibProgramDescription
  picture?: TypeLibGeneralPicture
  timenprice?: TypeLibProgramTimenprice
  study_form?: TypeLibProgramStudyForm
  forWhom?: TypeLibProgramForWhom
  forWhomPicture?: TypeLibGeneralPicture
  whatYouWillLearn?: TypeLibProgramWhatYouWillLearn
  howProcessGoes?: TypeLibProgramHowProcessGoes
  shortContents?: TypeLibProgramShortContents
  jobTitles?: TypeLibProgramJobTitles
  teachers?: TypeLibProgramTeachers
  questions?: TypeLibProgramQuestions
  study_field?: TypeLibProgramStudyField
  category?: TypeLibProgramCategory
  qualification?: TypeLibProgramQualification
} | null

export default TypeLibProgram
