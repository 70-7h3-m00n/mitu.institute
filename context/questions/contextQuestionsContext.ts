import { TypeLibProgramQuestions } from '@/types/index'
import { createContext } from 'react'

const contextQuestionsContext = createContext<{
  questions: TypeLibProgramQuestions | null
  setQuestions: ({
    payload
  }: {
    payload: TypeLibProgramQuestions | null
  }) => void
}>({
  questions: null,
  setQuestions: () => {}
})

export default contextQuestionsContext
