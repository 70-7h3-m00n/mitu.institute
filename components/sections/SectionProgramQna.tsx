import stls from '@/styles/components/sections/SectionProgramQna.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralAskQuestion } from '@/components/general'
import { LisQna } from '@/components/lis'

type TypeSectionProgramQnaProps = TypeClassNames

const SectionProgramQna = ({ classNames }: TypeSectionProgramQnaProps) => {
  const at = useAt()

  const { program } = useContext(ContextProgramContext)

  if (!program?.questions || program?.questions?.length === 0) return <></>

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Нас часто спрашивают</GeneralSectionTitle>
        <div className={stls.content}>
          <ul className={stls.qnas}>
            {program?.questions
              .filter(qna => qna.question && qna.answer)
              .map((qna, idx) => (
                <LisQna
                  key={(qna.question || 'SectionProgramQna_LisQna') + idx}
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
