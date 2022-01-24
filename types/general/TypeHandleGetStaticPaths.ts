import { TypeProgramCategory } from '@/types/index'

type TypeHandleGetStaticPaths = {
  paths: {
    params: {
      category: TypeProgramCategory
      studyField?: string
      program?: string
    }
  }[]
  fallback: boolean | 'blocking'
}

export default TypeHandleGetStaticPaths
