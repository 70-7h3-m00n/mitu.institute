import stls from '@/styles/components/sections/SectionFAQ.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ContextQuestionsContext } from '@/context/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { LisQna } from '@/components/lis'

type TypeSectionFAQProps = TypeClassNames

const SectionFAQ = ({ classNames = [] }: TypeSectionFAQProps) => {
  const at = useAt()

  const { questions } = useContext(ContextQuestionsContext)

  if (!questions || questions?.length === 0) return <></>

  return (
    <section className={cn(stls.container, getClassNames({ classNames }))}>
      <Wrapper>
        <GeneralSectionTitle classNames={[stls.title]}>
          Нас часто спрашивают
        </GeneralSectionTitle>
        <div className={stls.content}>
          <ul className={stls.qnas}>
            {questions
              ?.filter((qna, idx) => idx < 8)
              .map((qna, idx) => (
                <LisQna
                  key={(qna.question || 'SectionFAQ_qna') + idx}
                  qna={qna}
                  idx={idx}
                  classNames={[stls.qna]}
                />
              ))}
          </ul>
          <UIFormAlpha
            classNames={[stls.form]}
            variant='beta'
            title={
              <>Остались вопросы? Получите консультацию приемной комиссии</>
            }
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionFAQ
