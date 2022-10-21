import stls from '@/styles/components/sections/SectionHero.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import {
  GeneralSectionHeroPicture,
  GeneralPros,
  GeneralTextHighlight
} from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'

type TypeSectionHeroProps = TypeClassNames

const SectionHero = ({ classNames }: TypeSectionHeroProps) => {
  const at = useAt()

  const translations = {
    h1: at.en ? (
      <>
        Study in{' '}
        <GeneralTextHighlight>the most innovative</GeneralTextHighlight>{' '}
        institute
      </>
    ) : at.uz ? (
      <>
        Mamlakatning eng{' '}
        <GeneralTextHighlight>innovatsion universitetida</GeneralTextHighlight>{' '}
        tahsil oling
      </>
    ) : (
      <>
        Обучайся в{' '}
        <GeneralTextHighlight>самом инновационном</GeneralTextHighlight> ВУЗЕ
        страны
      </>
    )
  } as const

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <div className={stls.top}>
          <h1 className={stls.title}>{translations.h1}</h1>
          <GeneralSectionHeroPicture
            classNames={[cn(stls.picture, stls.phoneTablet)]}
          />
        </div>
        <div className={stls.bottom}>
          <UIFormAlpha classNames={[stls.form]} />
          <div className={stls.prosAndPicture}>
            <GeneralPros classNames={[stls.pros]} />
            <GeneralSectionHeroPicture
              classNames={[stls.picture, stls.laptopDesktop]}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionHero
