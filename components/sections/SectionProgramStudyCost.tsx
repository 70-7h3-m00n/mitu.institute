import stls from '@/styles/components/sections/SectionProgramStudyCost.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionProgramStudyCostProps = TypeClassNames & {
  title?: string
}

const SectionProgramStudyCost = ({
  classNames,
  title
}: TypeSectionProgramStudyCostProps) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Стоимость обучения</GeneralSectionTitle>
      </Wrapper>
    </section>
  )
}

export default SectionProgramStudyCost
