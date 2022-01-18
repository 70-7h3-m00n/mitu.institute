import stls from '@/styles/components/sections/SectionOurPrograms.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionOurProgramsProps = TypeClassNames

const SectionOurPrograms = ({ classNames }: TypeSectionOurProgramsProps) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <GeneralSectionTitle classNames={[stls.title]}>
          Наши направления
        </GeneralSectionTitle>
      </Wrapper>
    </section>
  )
}

export default SectionOurPrograms
