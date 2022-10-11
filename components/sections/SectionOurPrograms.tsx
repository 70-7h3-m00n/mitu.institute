import stls from '@/styles/components/sections/SectionOurPrograms.module.sass'
import {
  TypeBtnAlphaVariant,
  TypeClassNames,
  TypePagePromoProps
} from '@/types/index'
import { MouseEventHandler, useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesFront, selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { ContextCategoriesContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { CardsProgram } from '@/components/cards'
import { BtnAlpha } from '@/components/btns'

type TypeSectionOurProgramsProps = TypeClassNames & {
  promo?: boolean
  atPrograms?: boolean
  max?: number
  cardsStudyFields?: boolean
}

const SectionOurPrograms = ({
  classNames,
  promo,
  atPrograms,
  max,
  cardsStudyFields
}: TypeSectionOurProgramsProps) => {
  const at = useAt()
  const { categories, curCategory, setCategories } = useContext(
    ContextCategoriesContext
  )

  const btns = categories?.map(category => ({
    variantType: category?.type,
    onClick: () =>
      setCategories({
        categories,
        curCategory:
          categories?.filter(
            category2 => category2?.slug === category?.slug
          )?.[0] || null,
        curCategorySlug: category?.slug || null
      }),
    label: category?.label,
    href: category?.slug
  }))

  const translations = {
    programs: at.uz ? 'Dasturlar' : 'Программы',
    ourCourses: at.uz ? "Bizning yo'nalishlarimiz" : 'Наши направления',
    btnShowMore: at.uz ? "Ko'proq ko'rsatish" : 'Показать ещё'
  }

  return (
    <section
      id={selectors.programs}
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <GeneralSectionTitle classNames={[stls.title]}>
          {atPrograms ? translations.programs : translations.ourCourses}
        </GeneralSectionTitle>
        <div className={stls.content}>
          <div className={stls.btns}>
            {btns?.map((btn, idx) => (
              <BtnAlpha
                key={(btn.label || 'btn') + idx}
                tag={atPrograms ? 'Link' : 'button'}
                href={
                  atPrograms ? `${routesFront.programs}/${btn.href}` : undefined
                }
                scroll={false}
                variant={
                  curCategory?.type === btn.variantType
                    ? 'epsilon'
                    : 'epsilon-reverse'
                }
                classNames={[stls.btn]}
                onClick={atPrograms ? undefined : btn.onClick}>
                {btn.label}
              </BtnAlpha>
            ))}
          </div>
          <CardsProgram
            promo={promo}
            max={max}
            cardsStudyFields={cardsStudyFields}
          />
          {promo && (
            <Popup
              trigger={() => (
                <BtnAlpha variant='beta' classNames={[stls.btnShowMore]}>
                  {translations.btnShowMore}
                </BtnAlpha>
              )}
              modal
              lockScroll
              nested
              closeOnDocumentClick>
              {(close: MouseEventHandler) => (
                <GeneralPopup close={close}>
                  <UIFormAlpha isPopup />
                </GeneralPopup>
              )}
            </Popup>
          )}
          {!promo && !atPrograms && (
            <BtnAlpha
              variant='beta'
              classNames={[stls.btnShowMore]}
              tag='Link'
              href={`${routesFront.programs}/${curCategory?.slug}`}>
              {translations.btnShowMore}
            </BtnAlpha>
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionOurPrograms
