import stls from '@/styles/components/sections/SectionProgramWhatWillYouLearn.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionProgramWhatWillYouLearnProps = TypeClassNames

const SectionProgramWhatWillYouLearn = ({
  classNames
}: TypeSectionProgramWhatWillYouLearnProps) => {
  const at = useAt()

  const translations = {
    title: at.en
      ? 'What would you learn?'
      : at.uz
      ? "Nima o'rganasiz?"
      : 'Чему Вы научитесь?'
  }

  const { program } = useContext(ContextProgramContext)

  if (!program?.whatYouWillLearn) return <></>

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>{translations.title}</GeneralSectionTitle>
        <ul className={stls.items}>
          {program.whatYouWillLearn
            .filter(item => item?.item)
            .map((item, idx) => (
              <li
                key={(item.item || 'WhatWillYouLearnItem') + idx}
                className={stls.item}>
                <div className={stls.dot}></div>
                <p className={stls.p}>{item.item}</p>
              </li>
            ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionProgramWhatWillYouLearn
