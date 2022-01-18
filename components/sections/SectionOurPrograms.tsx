import stls from '@/styles/components/sections/SectionOurPrograms.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { CardsProgram } from '@/components/cards'
import { BtnAlpha } from '@/components/btns'

type TypeSectionOurProgramsProps = TypeClassNames

const SectionOurPrograms = ({ classNames }: TypeSectionOurProgramsProps) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <GeneralSectionTitle classNames={[stls.title]}>
          Наши направления
        </GeneralSectionTitle>
        <div className={stls.content}>
          <div className={stls.btns}>btns</div>
          <CardsProgram />
          <Popup
            trigger={() => (
              <BtnAlpha variant='beta' classNames={[stls.btn]}>
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

export default SectionOurPrograms
