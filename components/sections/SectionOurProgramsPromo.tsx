import stls from '@/styles/components/sections/SectionOurProgramsPromo.module.sass'
import { TypeClassNames, TypePagePromoStaticProps } from '@/types/index'
import { MouseEventHandler, useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextCategoryContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { CardsProgram } from '@/components/cards'
import { BtnAlpha } from '@/components/btns'

type TypeSectionOurProgramsPromoProps = TypeClassNames &
  TypePagePromoStaticProps

const SectionOurProgramsPromo = ({
  classNames,
  programs
}: TypeSectionOurProgramsPromoProps) => {
  const { category, setCategory } = useContext(ContextCategoryContext)

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
            <BtnAlpha
              variant={
                category === 'bakalavriat' ? 'epsilon' : 'epsilon-reverse'
              }
              classNames={[stls.btn]}
              onClick={() => setCategory({ payload: 'bakalavriat' })}>
              Бакалавриат
            </BtnAlpha>
            <BtnAlpha
              variant={
                category === 'magistratura' ? 'epsilon' : 'epsilon-reverse'
              }
              classNames={[stls.btn]}
              onClick={() => setCategory({ payload: 'magistratura' })}>
              Магистратура
            </BtnAlpha>
            <BtnAlpha
              variant={
                category === 'dopolnitelnoe' ? 'epsilon' : 'epsilon-reverse'
              }
              classNames={[stls.btn]}
              onClick={() => setCategory({ payload: 'dopolnitelnoe' })}>
              Дополнительное образование
            </BtnAlpha>
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
