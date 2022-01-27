import { TypeLibPrograms } from '@/types/index'
import { createContext } from 'react'

const contextProgramsContext = createContext<{
  programs: TypeLibPrograms | null
  setPrograms: ({ payload }: { payload: TypeLibPrograms | null }) => void
}>({
  programs: null,
  setPrograms: () => {}
})

export default contextProgramsContext
