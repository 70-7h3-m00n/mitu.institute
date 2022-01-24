import stls from '@/styles/components/sections/SectionProgramHowProcessGoes.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionProgramHowProcessGoesProps = TypeClassNames & {
  title?: string
}

const SectionProgramHowProcessGoes = ({
  classNames,
  title
}: TypeSectionProgramHowProcessGoesProps) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Как проходит обучение?</GeneralSectionTitle>
      </Wrapper>
    </section>
  )
}

export default SectionProgramHowProcessGoes
