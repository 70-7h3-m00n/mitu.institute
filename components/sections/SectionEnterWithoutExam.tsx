import stls from '@/styles/components/sections/SectionEnterWithoutExam.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { IconMortarboard } from '@/components/icons'

type TypeProgramWithoutExamProps = TypeClassNames

const SectionEnterWithoutExam = ({
  classNames
}: TypeProgramWithoutExamProps) => {
  const at = useAt()

  const translations = {
    title: at.en ? (
      'Is is possible to enter without exams?'
    ) : at.uz ? (
      'Use holda harakat qilish mumkinmi?'
    ) : (
      <>Можно ли поступить без&nbsp;ЕГЭ?</>
    ),
    p: at.en
      ? 'Submit a form to learn more and find our how to get higher education without entry exams with the special program'
      : at.uz
      ? "Arizani qoldiring va maxsus dasturda use holda oliy ma'lumot olish uchun tafsilotlarni bilib oling"
      : 'Оставь заявку и узнай подробности, как получить высшее образование без ЕГЭ по специальной программе',
    btnVal: at.en ? 'Submit' : at.uz ? "So'rov qoldiring" : 'Оставить заявку'
  }

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.bg}>
          <div className={stls.left}>
            <h2 className={stls.title}>
              <IconMortarboard
                classNames={[stls.icon, stls.tabletLaptopDesktop]}
              />
              <span className={stls.text}>{translations.title}</span>
            </h2>
          </div>
          <div className={stls.right}>
            <p className={stls.p}>{translations.p}</p>
            <Popup
              trigger={() => (
                <BtnAlpha variant='alpha-reverse'>
                  {translations.btnVal}
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

export default SectionEnterWithoutExam
