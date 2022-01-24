import { TypeContextProgram, TypeProgram } from '@/types/index'
import { SET_PROGRAM } from '@/context/types'

type contextProgramReducerState = TypeContextProgram

type contextProgramReducerAction = {
  payload: TypeProgram
  type: typeof SET_PROGRAM
}

const contextProgramReducer = (
  state: contextProgramReducerState,
  action: contextProgramReducerAction
) => {
  switch (action.type) {
    case SET_PROGRAM:
      return {
        ...state,
        program: action.payload
      }
    default:
      return state
  }
}

export default contextProgramReducer
