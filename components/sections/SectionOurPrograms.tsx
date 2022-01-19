import stls from '@/styles/components/sections/SectionOurPrograms.module.sass'
import { TypeClassNames, TypeProgramCategory } from '@/types/index'
import { MouseEventHandler, useState } from 'react'
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
  const [category, setCategory] = useState<TypeProgramCategory>('master')

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
          <div className={stls.btns}>
            <BtnAlpha
              variant={category === 'master' ? 'epsilon' : 'epsilon-reverse'}
              classNames={[stls.btn]}
              onClick={() => setCategory('master')}>
              Бакалавриат
            </BtnAlpha>
            <BtnAlpha
              variant={category === 'bachelor' ? 'epsilon' : 'epsilon-reverse'}
              classNames={[stls.btn]}
              onClick={() => setCategory('bachelor')}>
              Магистратура
            </BtnAlpha>
            <BtnAlpha
              variant={
                category === 'additional' ? 'epsilon' : 'epsilon-reverse'
              }
              classNames={[stls.btn]}
              onClick={() => setCategory('additional')}>
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

export default SectionOurPrograms
