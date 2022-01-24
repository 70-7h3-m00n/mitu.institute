import stls from '@/styles/components/sections/SectionHero.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralPros, GeneralTextHighlight } from '@/components/general'

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
      <Wrapper>Начните обучаться со скидкой</Wrapper>
    </section>
  )
}

export default SectionProgramQna
