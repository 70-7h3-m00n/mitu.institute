import stls from '@/styles/components/sections/SectionFullProgram.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
// import { studyingWithUsIs } from '@/data/index'
import { getClassNames } from '@/helpers/index'
import { ContextCategoriesContext } from '@/context/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { GeneralFullProgram, GeneralTextHighlight } from '@/components/general'

type TypeStudyingWithUsIs = string[]

type TypeSectionFullProgramProps = TypeClassNames

const SectionFullProgram = ({ classNames }: TypeSectionFullProgramProps) => {
  // const { program } = useContext(ContextCategoriesContext)
  const at = useAt()

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralFullProgram />
      </Wrapper>
    </section>
  )
}

export default SectionFullProgram
