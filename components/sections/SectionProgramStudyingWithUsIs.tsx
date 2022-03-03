import stls from '@/styles/components/sections/SectionProgramStudyingWithUsIs.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralTextHighlight } from '@/components/general'

type TypeSectionProgramStudyingWithUsIsProps = TypeClassNames

const SectionProgramStudyingWithUsIs = ({
  classNames
}: TypeSectionProgramStudyingWithUsIsProps) => {
  const { program } = useContext(ContextProgramContext)

  if (!program?.whatYouWillLearn) return <></>

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>
          Обучение в{' '}
          <GeneralTextHighlight>
            «Московском институте технологий и управления»
          </GeneralTextHighlight>
          — это
        </GeneralSectionTitle>
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

export default SectionProgramStudyingWithUsIs
