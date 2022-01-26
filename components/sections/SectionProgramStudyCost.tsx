import stls from '@/styles/components/sections/SectionProgramStudyCost.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import { useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getClassNames } from '@/helpers/index'
import {
  ContextCategoriesContext,
  ContextProgramContext
} from '@/context/index'
import { Wrapper } from '@/components/layout'
import {
  GeneralSectionTitle,
  GeneralPopup,
  GeneralTextHighlight
} from '@/components/general'
import { ProgramStudyDuration, ProgramAdmission } from '@/components/program'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { ImgStudyCost } from '@/components/imgs'

type TypeSectionProgramStudyCostProps = TypeClassNames

const SectionProgramStudyCost = ({
  classNames
}: TypeSectionProgramStudyCostProps) => {
  const { program } = useContext(ContextProgramContext)
  const { curCategory } = useContext(ContextCategoriesContext)

  if (!program?.timenprice?.[0]) return <></>

  console.log(program.timenprice[0])

  const testimonials = [
    {
      id: 'SectionProgramStudyCostStudyDuration',
      item: (
        <span>
          Длительность обучения{' '}
          <ProgramStudyDuration
            studyDurationMonths={Number(
              program.timenprice[0].studyMonthsDuration || 12
            )}
          />
        </span>
      )
    },
    {
      id: 'SectionProgramStudyCostStudyFormat',
      item: <>Дистанционно</>
    },
    {
      id: 'SectionProgramStudyCostProgramAdmission',
      item: (
        <>
          Ближайшее зачисление <ProgramAdmission />
        </>
      )
    },
    {
      id: 'SectionProgramStudyCostDiploma',
      item: <>Государственный диплом</>,
      highlight: true
    }
  ]

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Стоимость обучения</GeneralSectionTitle>
        <div className={stls.content}>
          <div className={stls.left}>
            <h3 className={stls.h3}>Оплата за один семестр</h3>
            <div className={stls.prices}>
              <p className={stls.priceRegular}>36 200 ₽</p>
              <p className={stls.priceDiscounted}>25 000 ₽</p>
            </div>
            <h3 className={cn(stls.h3, stls.h3Mx)}>
              Беспроцентная рассрочка на{' '}
              <GeneralTextHighlight>12 месяцев</GeneralTextHighlight>
            </h3>
            <div className={stls.prices}>
              <p className={stls.priceRegular}>11 300 ₽</p>
              <p className={stls.priceDiscounted}>7 900 ₽</p>
            </div>
          </div>
          <div className={stls.right}>
            {curCategory?.label && (
              <h3 className={stls.h3}>{curCategory.label}</h3>
            )}
            <ul className={stls.testimonials}>
              {testimonials.map((testimonial, idx) => (
                <li key={testimonial.id} className={stls.testimonialItem}>
                  <div className={stls.testimonialDot}></div>
                  <div
                    className={cn(stls.testimonial, {
                      [stls.highlight]: testimonial.highlight
                    })}>
                    {testimonial.item}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ImgStudyCost classNames={[stls.imgPhone]} />
        <div className={cn(stls.btnPhone)}>
          <Popup
            trigger={() => <BtnAlpha variant='gamma'>Оставить заявку</BtnAlpha>}
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

export default SectionProgramStudyCost
