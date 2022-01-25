import stls from '@/styles/components/sections/SectionProgramQna.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionProgramQnaProps = TypeClassNames & {
  title?: string
}

const SectionProgramQna = ({
  classNames,
  title
}: TypeSectionProgramQnaProps) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        {' '}
        <GeneralSectionTitle>Нас часто спрашивают</GeneralSectionTitle>
      </Wrapper>
    </section>
  )
}

export default SectionProgramQna
