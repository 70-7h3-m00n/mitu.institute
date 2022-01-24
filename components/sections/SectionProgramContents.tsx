import stls from '@/styles/components/sections/SectionHero.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionProgramContentsProps = TypeClassNames & {
  title?: string
}

const SectionProgramContents = ({
  classNames,
  title
}: TypeSectionProgramContentsProps) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Краткая программа курса</GeneralSectionTitle>
      </Wrapper>
    </section>
  )
}

export default SectionProgramContents
