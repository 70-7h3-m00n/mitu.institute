import { TypeProgramCategory } from '@/types/index'

type TypeProgram = {
  title?: string
  slug?: string
  description?: string
  timenprice?: {
    studyMonthsDuration?: string
    price?: string
    discount?: string
  }[]
  study_form?: {
    label?: string
  }
  forWhom?: {
    title?: {
      titlePart: string
      highlight: boolean
    }[]
    desc?: string
  }[]
  forWhomPicture?: {
    url?: string
    width?: number
    height?: number
  }
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
  study_field?: {
    type?: string
    slug?: string
  }
  category: {
    type?: TypeProgramCategory
    slug?: string
    label?: string
  }
} | null

export default TypeProgram
