import stls from '@/styles/components/sections/SectionFAQ.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { qnas } from '@/data/index'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { LisQna } from '@/components/lis'

type TypeSectionFAQProps = TypeClassNames

const SectionFAQ = ({ classNames = [] }: TypeSectionFAQProps) => {
  return (
    <section className={cn(stls.container, getClassNames({ classNames }))}>
      <Wrapper>
        <GeneralSectionTitle classNames={[stls.title]}>
          Нас часто спрашивают
        </GeneralSectionTitle>
        <div className={stls.content}>
          <ul className={stls.qnas}>
            {qnas.map((qna, idx) => (
              <LisQna
                key={qna.question + idx}
                qna={qna}
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
