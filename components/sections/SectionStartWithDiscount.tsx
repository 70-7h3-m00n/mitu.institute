import stls from '@/styles/components/sections/SectionStartWithDiscount.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext, MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getClassNames } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { IconAlarm } from '@/components/icons'

type TypeSectionStartWithDiscountProps = TypeClassNames

const SectionStartWithDiscount = ({
  classNames
}: TypeSectionStartWithDiscountProps) => {
  const { program } = useContext(ContextProgramContext)

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <IconAlarm classNames={[stls.icon, stls.icon1]} />
          <IconAlarm classNames={[stls.icon, stls.icon2]} />
          <IconAlarm classNames={[stls.icon, stls.icon3]} />
          <div className={stls.inner}>
            <h2 className={stls.title}>Начните обучаться со скидкой</h2>
            <p className={stls.p}>
              У Вас есть вопросы? Оставьте заявку! Мы перезвоним Вам!
            </p>
            <Popup
              trigger={() => (
                <BtnAlpha variant='alpha-reverse' classNames={[stls.btn]}>
                  Оставить заявку
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
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionStartWithDiscount
