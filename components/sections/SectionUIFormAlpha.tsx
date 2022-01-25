import stls from '@/styles/components/sections/SectionUIFormAlpha.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { GeneralTextHighlight } from '@/components/general'
import { Wrapper } from '@/components/layout'
import { UIFormAlpha } from '@/components/uiforms'

type TypeSectionUIFormAlphaProps = TypeClassNames & {
  title?: string
}

const SectionUIFormAlpha = ({
  classNames,
  title
}: TypeSectionUIFormAlphaProps) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <UIFormAlpha
          classNames={[stls.form]}
          title={
            <>
              <GeneralTextHighlight reverse>
                {title ||
                  'Оставьте заявку и узнайте минимальный проходной балл в 2021 году'}
              </GeneralTextHighlight>
            </>
          }
        />
      </Wrapper>
    </section>
  )
}

export default SectionUIFormAlpha
