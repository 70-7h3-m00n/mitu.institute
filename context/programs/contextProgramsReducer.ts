import { TypeContextPrograms, TypeLibPrograms } from '@/types/index'
import { SET_PROGRAMS } from '@/context/types'

type contextProgramsReducerState = TypeContextPrograms

type contextProgramsReducerAction = {
  payload: TypeLibPrograms | null
  type: typeof SET_PROGRAMS
}

const contextProgramsReducer = (
  state: contextProgramsReducerState,
  action: contextProgramsReducerAction
) => {
  switch (action.type) {
    case SET_PROGRAMS:
      return {
        ...state,
        programs: action.payload
      }
    default:
      return state
  }
}

export default contextProgramsReducer
