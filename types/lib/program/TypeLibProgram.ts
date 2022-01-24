import {
  TypeLibProgramTitle,
  TypeLibProgramSlug,
  TypeLibProgramDescription,
  TypeLibProgramTimenprice,
  TypeLibProgramStudyForm,
  TypeLibProgramForWhom,
  TypeLibGeneralPicture,
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
  whatYouWillLearn?: {
    item?: string
  }[]
  howProcessGoes?: {
    title?: string
    description?: string
    courseContainsOf?: {
      title?: string
      percent?: string
    }[]
  }
  shortContents?: {
    title?: string
  }[]
  jobTitles?: {
    picture?: {
      url?: string
      width?: number
      height?: number
    }
    position?: string
    salary?: string
  }[]
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
