import { TypeLibProgramQuestions } from '@/types/index'
import { createContext, Dispatch, SetStateAction } from 'react'

const contextQuestionsContext = createContext<{
  questions: TypeLibProgramQuestions | null
  setQuestions: Dispatch<SetStateAction<TypeLibProgramQuestions | null>>
}>({
  questions: null,
  setQuestions: () => {}
})

export default contextQuestionsContext
