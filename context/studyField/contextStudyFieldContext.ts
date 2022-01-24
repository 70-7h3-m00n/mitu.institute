import { TypeProgramStudyField } from '@/types/index'
import { createContext } from 'react'

const contextStudyFieldContext = createContext<{
  studyField: TypeProgramStudyField
  setStudyField: ({ payload }: { payload: TypeProgramStudyField }) => void
}>({
  studyField: null,
  setStudyField: () => {}
})

export default contextStudyFieldContext
