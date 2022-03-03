import stls from '@/styles/components/sections/SectionStudyingWithUsIs.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { studyingWithUsIs } from '@/data/index'
import { getClassNames } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralTextHighlight } from '@/components/general'

type TypeSectionStudyingWithUsIsProps = TypeClassNames

const SectionStudyingWithUsIs = ({
  classNames
}: TypeSectionStudyingWithUsIsProps) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle classNames={[stls.title]}>
          Обучение в{' '}
          <GeneralTextHighlight>
            «Московском институте технологий <br /> и управления»
          </GeneralTextHighlight>{' '}
          — это
        </GeneralSectionTitle>
        <ul className={stls.items}>
          {studyingWithUsIs.map((item, idx) => (
            <li
              key={(item || 'studyingWithUsIsItem') + idx}
              className={stls.item}>
              <div className={stls.dot}></div>
              <p className={stls.p}>{item}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionStudyingWithUsIs
