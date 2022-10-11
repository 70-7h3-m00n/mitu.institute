import { TypeLibProgram } from '@/types/index'
import { createContext, Dispatch, SetStateAction } from 'react'

const contextProgramContext = createContext<{
  program: TypeLibProgram | null
  setProgram: Dispatch<SetStateAction<TypeLibProgram | null>>
}>({
  program: null,
  setProgram: () => {}
})

export default contextProgramContext
