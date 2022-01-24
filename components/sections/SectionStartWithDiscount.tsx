import stls from '@/styles/components/sections/SectionHero.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionStartWithDiscountProps = TypeClassNames & {
  title?: string
}

const SectionStartWithDiscount = ({
  classNames,
  title
}: TypeSectionStartWithDiscountProps) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Нас часто спрашивают</GeneralSectionTitle>
      </Wrapper>
    </section>
  )
}

export default SectionStartWithDiscount
