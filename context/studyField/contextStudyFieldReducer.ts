import { SET_STUDY_FIELD } from '@/context/types'

type contextStudyFieldReducerState = {
  studyField: string | null
}

type contextStudyFieldReducerAction = {
  payload: string | null
  type: typeof SET_STUDY_FIELD
}

const contextStudyFieldReducer = (
  state: contextStudyFieldReducerState,
  action: contextStudyFieldReducerAction
) => {
  switch (action.type) {
    case SET_STUDY_FIELD:
      return {
        ...state,
        studyField: action.payload
      }
    default:
      return state
  }
}

export default contextStudyFieldReducer
