import {
  TypeChildren,
  TypeContextQuestions,
  TypeLibProgramQuestions
} from '@/types/index'
import { SET_QUESTIONS } from '@/context/types'
import { useReducer } from 'react'
import {
  ContextQuestionsContext,
  contextQuestionsReducer
} from '@/context/index'

type TypeContextQuestionsStateProps = TypeChildren

const ContextQuestionsState = ({
  children
}: TypeContextQuestionsStateProps) => {
  const initialState: TypeContextQuestions = {
    questions: null
  }

  const [state, dispatch] = useReducer(contextQuestionsReducer, initialState)

  const setQuestions = ({
    payload
  }: {
    payload: TypeLibProgramQuestions | null
  }) => {
    dispatch({ type: SET_QUESTIONS, payload })
  }

  return (
    <ContextQuestionsContext.Provider
      value={{
        questions: state.questions,
        setQuestions
      }}>
      {children}
    </ContextQuestionsContext.Provider>
  )
}

export default ContextQuestionsState
