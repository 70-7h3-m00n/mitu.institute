import stls from '@/styles/components/sections/SectionProgramWhatWillYouLearn.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionProgramWhatWillYouLearnProps = TypeClassNames

const SectionProgramWhatWillYouLearn = ({
  classNames
}: TypeSectionProgramWhatWillYouLearnProps) => {
  const { program } = useContext(ContextProgramContext)

  if (!program?.whatYouWillLearn) return <></>

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Чему Вы научитесь?</GeneralSectionTitle>
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
