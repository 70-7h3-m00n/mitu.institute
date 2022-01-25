import stls from '@/styles/components/sections/SectionOurProgramsPromo.module.sass'
import {
  TypeBtnAlphaVariant,
  TypeClassNames,
  TypePagePromoProps
} from '@/types/index'
import { MouseEventHandler, useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import {
  ContextCategoriesContext,
  ContextCategoryContext
} from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { CardsProgram } from '@/components/cards'
import { BtnAlpha } from '@/components/btns'

type TypeSectionOurProgramsPromoProps = TypeClassNames

const SectionOurProgramsPromo = ({
  classNames
}: TypeSectionOurProgramsPromoProps) => {
  const { category, setCategory } = useContext(ContextCategoryContext)
  const { categories } = useContext(ContextCategoriesContext)

  console.log(categories)

  const btns = categories?.map(category => ({
    variantType: category.type,
    onClick: () => setCategory({ payload: category.type || null }),
    label: category.label
  }))

  return (
    <section
      id={selectors.programs}
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <GeneralSectionTitle classNames={[stls.title]}>
          Наши направления
        </GeneralSectionTitle>
        <div className={stls.content}>
          <div className={stls.btns}>
            {btns?.map((btn, idx) => (
              <BtnAlpha
                key={(btn.label || 'btn') + idx}
                variant={
                  category === btn.variantType ? 'epsilon' : 'epsilon-reverse'
                }
                classNames={[stls.btn]}
                onClick={btn.onClick}>
                {btn.label}
              </BtnAlpha>
            ))}
          </div>
          <CardsProgram category={category} />
          <Popup
            trigger={() => (
              <BtnAlpha variant='beta' classNames={[stls.btnShowMore]}>
                Показать ещё
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
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionOurProgramsPromo
