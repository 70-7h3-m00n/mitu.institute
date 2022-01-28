import { TypeContextQuestions, TypeLibProgramQuestions } from '@/types/index'
import { SET_QUESTIONS } from '@/context/types'

type contextQuestionsReducerState = TypeContextQuestions

type contextQuestionsReducerAction = {
  payload: TypeLibProgramQuestions | null
  type: typeof SET_QUESTIONS
}

const contextQuestionsReducer = (
  state: contextQuestionsReducerState,
  action: contextQuestionsReducerAction
) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      }
    default:
      return state
  }
}

export default contextQuestionsReducer
