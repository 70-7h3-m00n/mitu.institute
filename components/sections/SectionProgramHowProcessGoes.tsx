import stls from '@/styles/components/sections/SectionProgramHowProcessGoes.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionProgramHowProcessGoesProps = TypeClassNames

const SectionProgramHowProcessGoes = ({
  classNames
}: TypeSectionProgramHowProcessGoesProps) => {
  const { program } = useContext(ContextProgramContext)

  if (!program?.howProcessGoes) return <></>

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
