import stls from '@/styles/components/sections/SectionHero.module.sass'
import TypeClassNames from '@/types/TypeClassNames'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { ImgHeroLady } from '@/components/imgs'
import {
  IconChat,
  IconLightBulb,
  IconVideoOnStand,
  IconGraduationHat,
  IconMagnifyingGlass
} from '@/components/icons'

type TypeSectionHero = TypeClassNames

const SectionHero = ({ classNames }: TypeSectionHero) => {
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
        <div className={stls.picture}>
          <IconChat classNames={[stls.icon, stls.chat]} />
          <IconLightBulb classNames={[stls.icon, stls.lightBulb]} />
          <IconMagnifyingGlass classNames={[stls.icon, stls.magnifyingGlass]} />
          <IconVideoOnStand classNames={[stls.icon, stls.videoOnStand]} />
          <IconGraduationHat classNames={[stls.icon, stls.graduationHat]} />
          <ImgHeroLady />
        </div>
      </Wrapper>
    </div>
  )
}

export default SectionHero
