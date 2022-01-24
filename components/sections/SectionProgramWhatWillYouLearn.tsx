import stls from '@/styles/components/sections/SectionProgramWhatWillYouLearn.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionProgramWhatWillYouLearnProps = TypeClassNames & {
  title?: string
}

const SectionProgramWhatWillYouLearn = ({
  classNames,
  title
}: TypeSectionProgramWhatWillYouLearnProps) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Чему Вы научитесь?</GeneralSectionTitle>
      </Wrapper>
    </section>
  )
}

export default SectionProgramWhatWillYouLearn
