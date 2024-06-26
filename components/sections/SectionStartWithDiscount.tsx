import stls from '@/styles/components/sections/SectionStartWithDiscount.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext, MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { IconAlarm, IconRhombusStar } from '@/components/icons'
import mituinstitute from '@/config/mituinstitute'

type TypeSectionStartWithDiscountProps = TypeClassNames

const SectionStartWithDiscount = ({
  classNames
}: TypeSectionStartWithDiscountProps) => {
  const at = useAt()
  const translations = {
    startOffWithDiscount: at.en
      ? 'Get started with a discount'
      : at.uz
      ? "Chegirma bilan o'rganishni boshlang"
      : 'Начните обучаться со скидкой',
    areThereQuestions: at.en
      ? 'You have questions? Leave a request! We will call you back!'
      : at.uz
      ? "Sizda savollar bormi? So'rov qoldiring! Sizga qo'ng'iroq qilamiz!"
      : 'У Вас есть вопросы? Оставьте заявку! Мы перезвоним Вам!',
    leaveApplication: at.en
      ? 'Submit'
      : at.uz
      ? "So'rov qoldiring"
      : 'Оставить заявку'
  }

  const { program } = useContext(ContextProgramContext)

  const atAdditional = program?.category?.type === 'additional' && mituinstitute

  return (
    <section
      className={
        cn(
          [stls.container],
          { [stls.atAdditional]: atAdditional },
          getClassNames({ classNames })
        ) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div
          className={cn(stls.content, { [stls.atAdditional]: atAdditional })}>
          {atAdditional ? (
            <>
              <IconRhombusStar
                classNames={[stls.IconRhombusStar, stls.IconRhombusStar1]}
              />
              <IconRhombusStar
                classNames={[stls.IconRhombusStar, stls.IconRhombusStar2]}
              />
              <IconRhombusStar
                classNames={[stls.IconRhombusStar, stls.IconRhombusStar3]}
              />
            </>
          ) : (
            <>
              <IconAlarm classNames={[stls.icon, stls.icon1]} />
              <IconAlarm classNames={[stls.icon, stls.icon2]} />
              <IconAlarm classNames={[stls.icon, stls.icon3]} />
            </>
          )}
          <div className={stls.inner}>
            <h2
              className={cn(stls.title, { [stls.atAdditional]: atAdditional })}>
              {translations.startOffWithDiscount}
            </h2>
            <p className={stls.p}>{translations.areThereQuestions}</p>
            <Popup
              trigger={() => (
                <BtnAlpha
                  variant='alpha-reverse'
                  classNames={[
                    cn(stls.btn, { [stls.atAdditional]: atAdditional })
                  ]}>
                  {translations.leaveApplication}
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
