import stls from '@/styles/components/sections/SectionHero.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionProgramYourDiplomaProps = TypeClassNames & {
  title?: string
}

const SectionProgramYourDiploma = ({
  classNames,
  title
}: TypeSectionProgramYourDiplomaProps) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Твой будущий диплом</GeneralSectionTitle>
      </Wrapper>
    </section>
  )
}

export default SectionProgramYourDiploma
