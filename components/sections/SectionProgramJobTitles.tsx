import stls from '@/styles/components/sections/SectionHero.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionProgramJobTitlesProps = TypeClassNames & {
  title?: string
}

const SectionProgramJobTitles = ({
  classNames,
  title
}: TypeSectionProgramJobTitlesProps) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Кем Вы сможете работать?</GeneralSectionTitle>
      </Wrapper>
    </section>
  )
}

export default SectionProgramJobTitles
