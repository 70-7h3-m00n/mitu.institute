import { createContext, Dispatch } from 'react'

const contextStudyFieldContext = createContext<{
  studyField: string | null
  setStudyField: Dispatch<any>
}>({
  studyField: null,
  setStudyField: () => {}
})

export default contextStudyFieldContext
