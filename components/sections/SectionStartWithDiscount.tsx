import stls from '@/styles/components/sections/SectionStartWithDiscount.module.sass'
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
      <Wrapper>Начните обучаться со скидкой</Wrapper>
    </section>
  )
}

export default SectionStartWithDiscount
