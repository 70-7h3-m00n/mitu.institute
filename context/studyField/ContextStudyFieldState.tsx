import {
  TypeChildren,
  TypeContextStudyField,
  TypeProgramStudyField
} from '@/types/index'
import { SET_STUDY_FIELD } from '@/context/types'
import { useReducer } from 'react'
import {
  ContextStudyFieldContext,
  contextStudyFieldReducer
} from '@/context/index'

type TypeContextStudyFieldStateProps = TypeChildren

const ContextStudyFieldState = ({
  children
}: TypeContextStudyFieldStateProps) => {
  const initialState: TypeContextStudyField = {
    studyField: null
  }

  const [state, dispatch] = useReducer(contextStudyFieldReducer, initialState)

  const setStudyField = ({ payload }: { payload: TypeProgramStudyField }) => {
    dispatch({ type: SET_STUDY_FIELD, payload })
  }

  return (
    <ContextStudyFieldContext.Provider
      value={{
        studyField: state.studyField,
        setStudyField
      }}>
      {children}
    </ContextStudyFieldContext.Provider>
  )
}

export default ContextStudyFieldState
