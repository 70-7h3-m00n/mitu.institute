import stls from '@/styles/components/sections/SectionHero.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionProgramForWhomProps = TypeClassNames & {
  title?: string
}

const SectionProgramForWhom = ({
  classNames,
  title
}: TypeSectionProgramForWhomProps) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Для кого эта программа?</GeneralSectionTitle>
      </Wrapper>
    </section>
  )
}

export default SectionProgramForWhom
