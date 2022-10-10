import { TypeLibPrograms } from '@/types/index'
import { createContext, Dispatch } from 'react'

const contextProgramsContext = createContext<{
  programs: TypeLibPrograms | null
  setPrograms: Dispatch<any>
}>({
  programs: null,
  setPrograms: () => {}
})

export default contextProgramsContext
