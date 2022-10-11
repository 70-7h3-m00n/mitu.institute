import { createContext, Dispatch, SetStateAction } from 'react'

const contextStudyFieldContext = createContext<{
  studyField: string | null
  setStudyField: Dispatch<SetStateAction<string | null>>
}>
  ({
    studyField: null,
    setStudyField: () => { }
  })

export default contextStudyFieldContext
