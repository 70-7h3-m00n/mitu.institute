import { TypeChildren, TypeContextProgram, TypeProgram } from '@/types/index'
import { SET_PROGRAM } from '@/context/types'
import { useReducer } from 'react'
import { ContextProgramContext, contextProgramReducer } from '@/context/index'

type TypeContextProgramStateProps = TypeChildren

const ContextProgramState = ({ children }: TypeContextProgramStateProps) => {
  const initialState: TypeContextProgram = {
    program: null
  }

  const [state, dispatch] = useReducer(contextProgramReducer, initialState)

  const setProgram = ({ payload }: { payload: TypeProgram }) => {
    dispatch({ type: SET_PROGRAM, payload })
  }

  return (
    <ContextProgramContext.Provider
      value={{
        program: state.program,
        setProgram
      }}>
      {children}
    </ContextProgramContext.Provider>
  )
}

export default ContextProgramState
