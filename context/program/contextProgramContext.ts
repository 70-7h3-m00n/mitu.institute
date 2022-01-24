import { TypeLibProgram } from '@/types/index'
import { createContext } from 'react'

const contextProgramContext = createContext<{
  program: TypeLibProgram | null
  setProgram: ({ payload }: { payload: TypeLibProgram }) => void
}>({
  program: null,
  setProgram: () => {}
})

export default contextProgramContext
