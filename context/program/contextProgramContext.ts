import { TypeProgram } from '@/types/index'
import { createContext } from 'react'

const contextProgramContext = createContext<{
  program: TypeProgram | null
  setProgram: ({ payload }: { payload: TypeProgram }) => void
}>({
  program: null,
  setProgram: () => {}
})

export default contextProgramContext
