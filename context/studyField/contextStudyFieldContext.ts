import { createContext } from 'react'

const contextStudyFieldContext = createContext<{
  studyField: string | null
  setStudyField: ({ payload }: { payload: string | null }) => void
}>({
  studyField: null,
  setStudyField: () => {}
})

export default contextStudyFieldContext
