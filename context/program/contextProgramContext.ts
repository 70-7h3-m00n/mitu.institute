import { TypeLibProgram } from '@/types/index'
import { createContext, Dispatch } from 'react'

const contextProgramContext = createContext<{
  program: TypeLibProgram | null
  setProgram: Dispatch<any>
}>({
  program: null,
  setProgram: () => {}
})

export default contextProgramContext
