import stls from '@/styles/components/sections/SectionHero.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { SectionHeroPicture, Pros } from '@/components/general'
import { FormAlpha } from '@/components/forms'

type TypeSectionHeroProps = TypeClassNames

const SectionHero = ({ classNames }: TypeSectionHeroProps) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <h1 className={stls.title}>
          Обучайся в <span className={stls.highlight}>самом инновационном</span>{' '}
          ВУЗЕ страны
        </h1>
        <SectionHeroPicture classNames={[stls.picture]} />
        <Pros />
        <FormAlpha />
      </Wrapper>
    </div>
  )
}

export default SectionHero
