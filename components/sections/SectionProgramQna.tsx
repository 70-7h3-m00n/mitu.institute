import stls from '@/styles/components/sections/SectionProgramQna.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { qnas } from '@/data/index'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralAskQuestion } from '@/components/general'
import { LisQna } from '@/components/lis'

type TypeSectionProgramQnaProps = TypeClassNames

const SectionProgramQna = ({ classNames }: TypeSectionProgramQnaProps) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Нас часто спрашивают</GeneralSectionTitle>
        <div className={stls.content}>
          <ul className={stls.qnas}>
            {qnas.map((qna, idx) => (
              <LisQna
                key={qna.question + idx}
                qna={qna}
                idx={idx}
                classNames={[stls.qna]}
                variant='beta'
              />
            ))}
          </ul>
          <GeneralAskQuestion />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionProgramQna
