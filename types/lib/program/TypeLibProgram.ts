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
  TypeLibProgramStudyField,
  TypeLibProgramCategory
} from '@/types/index'

type TypeLibProgram = {
  title?: TypeLibProgramTitle
  slug?: TypeLibProgramSlug
  description?: TypeLibProgramDescription
  timenprice?: TypeLibProgramTimenprice
  study_form?: TypeLibProgramStudyForm
  forWhom?: TypeLibProgramForWhom
  forWhomPicture?: TypeLibGeneralPicture
  whatYouWillLearn?: TypeLibProgramWhatYouWillLearn
  howProcessGoes?: TypeLibProgramHowProcessGoes
  shortContents?: TypeLibProgramShortContents
  jobTitles?: TypeLibProgramJobTitles
  teachers?: {
    portrait?: {
      url?: string
      width?: number
      height?: number
    }
    name?: string
    specialization?: string
  }[]
  questions?: {
    question?: string
    answer?: string
  }[]
  study_field?: TypeLibProgramStudyField
  category?: TypeLibProgramCategory
} | null

export default TypeLibProgram
