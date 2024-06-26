import stls from '@/styles/components/sections/SectionUIFormAlpha.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { useAt } from '@/hooks/index'
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
  const at = useAt()
  const { program } = useContext(ContextProgramContext)

  const currentYear = new Date().getFullYear();

  const translations = {
    title: at.en
      ? `Leave an application and find out the minimum passing score in ${currentYear}`
      : at.uz
      ? `So'rov qoldiring va ${currentYear} yilda eng kam o'tish ballini toping`
      : `Оставьте заявку и узнайте минимальный проходной балл в ${currentYear} году`
  }

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
                {title || translations.title}
              </GeneralTextHighlight>
            </>
          }
        />
      </Wrapper>
    </section>
  )
}

export default SectionUIFormAlpha
