import { TypeLibPrograms } from '@/types/index'
import { createContext, Dispatch, SetStateAction } from 'react'

const contextProgramsContext = createContext<{
  programs: TypeLibPrograms | null
  setPrograms: Dispatch<SetStateAction<TypeLibPrograms | null>>
}>({
  programs: null,
  setPrograms: () => {}
})

export default contextProgramsContext
