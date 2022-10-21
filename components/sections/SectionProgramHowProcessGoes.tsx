import stls from '@/styles/components/sections/SectionProgramHowProcessGoes.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionProgramHowProcessGoesProps = TypeClassNames

const SectionProgramHowProcessGoes = ({
  classNames
}: TypeSectionProgramHowProcessGoesProps) => {
  const at = useAt()

  const translations = {
    title: at.en
      ? 'How process goes?'
      : at.uz
      ? 'Trening qanday amalga oshiriladi?'
      : 'Как проходит обучение?'
  }

  const { program } = useContext(ContextProgramContext)

  if (!program?.howProcessGoes) return <></>

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>{translations.title}</GeneralSectionTitle>
      </Wrapper>
    </section>
  )
}

export default SectionProgramHowProcessGoes
