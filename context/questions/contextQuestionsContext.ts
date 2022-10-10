import { TypeLibProgramQuestions } from '@/types/index'
import { createContext, Dispatch } from 'react'

const contextQuestionsContext = createContext<{
  questions: TypeLibProgramQuestions | null
  setQuestions: Dispatch<any>
}>({
  questions: null,
  setQuestions: () => {}
})

export default contextQuestionsContext
