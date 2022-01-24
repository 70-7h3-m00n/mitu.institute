import { TypeProgramCategory, TypeProgramStudyField } from '@/types/index'

type TypeHandleGetStaticPaths = {
  paths: {
    params: {
      category?: string | string[]
      studyField?: string | string[]
      program?: string | string[]
    }
  }[]
  fallback: boolean | 'blocking'
}

export default TypeHandleGetStaticPaths
