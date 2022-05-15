import stls from '@/styles/components/sections/SectionProgramStudyCost.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import { useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { mituinstitute } from '@/config/index'
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
import {
  ProgramStudyDuration,
  ProgramAdmission,
  ProgramCost
} from '@/components/program'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { ImgStudyCost } from '@/components/imgs'

type TypeSectionProgramStudyCostProps = TypeClassNames

const SectionProgramStudyCost = ({
  classNames
}: TypeSectionProgramStudyCostProps) => {
  const { program } = useContext(ContextProgramContext)
  const { curCategory } = useContext(ContextCategoriesContext)

  if (!program?.timenprice?.[0]?.price || !program?.timenprice?.[0]?.discount)
    return <></>

  const testimonials = [
    {
      id: 'SectionProgramStudyCostStudyDuration',
      item: (
        <span>
          Длительность обучения{' '}
          {
            <ProgramStudyDuration
              studyDurationMonths={Number(
                program.timenprice?.[0]?.studyMonthsDuration || 12
              )}
            />
          }
        </span>
      )
    },
    {
      id: 'SectionProgramStudyCostStudyFormat',
      item: mituinstitute
        ? 'Дистанционная'
        : 'Очная, очно-заочная, заочная с применением дистанционных технологий обучения'
    },
    {
      id: 'SectionProgramStudyCostProgramAdmission',
      item: mituinstitute ? (
        <>
          Ближайшее зачисление <ProgramAdmission />
        </>
      ) : (
        'Ежемесячно'
      )
    },
    {
      id: 'SectionProgramStudyCostDiploma',
      item: mituinstitute
        ? // <>Государственный диплом</>
          null
        : 'Престижный диплом о высшем образовании',
      highlight: true
    }
  ]

  const btn = (
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
  )

  // TODO: improve styles for this section & rub sign + phone layout
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Стоимость обучения</GeneralSectionTitle>
        <div className={stls.content}>
          <div className={stls.left}>
            {/* <h3 className={stls.h3}>Оплата за один семестр</h3>
            <div className={stls.prices}>
              <p className={stls.priceRegular}>
                {' '}
                <ProgramCost
                  price={Number(program.timenprice[0].price)}
                  discount={Number(program.timenprice[0].discount)}
                  isRegular
                  isHalf
                  withRubSign
                  withPerMonthLabel
                />
              </p>
              <p className={stls.priceDiscounted}>
                <ProgramCost
                  price={Number(program.timenprice[0].price)}
                  discount={Number(program.timenprice[0].discount)}
                  isHalf
                  withRubSign
                  withPerMonthLabel
                />
              </p>
            </div> */}
            <h3 className={cn(stls.h3, stls.h3Mx)}>
              Беспроцентная рассрочка на&nbsp;
              <GeneralTextHighlight>12&nbsp;месяцев</GeneralTextHighlight>
            </h3>
            <div className={cn(stls.prices, stls.pricesBottom)}>
              <p className={stls.priceRegular}>
                <ProgramCost
                  price={Number(program.timenprice[0].price)}
                  discount={Number(program.timenprice[0].discount)}
                  isRegular
                  isOneTwelfth
                  withRubSign
                  withPerMonthLabel
                />
              </p>
              <p className={stls.priceDiscounted}>
                <ProgramCost
                  price={Number(program.timenprice[0].price)}
                  discount={Number(program.timenprice[0].discount)}
                  isOneTwelfth
                  withRubSign
                  withPerMonthLabel
                />
              </p>
            </div>
          </div>
          <div className={stls.right}>
            <div className={stls.rightContent}>
              <div className={stls.rightContentHeading}>
                {curCategory?.label && (
                  <h3 className={stls.h3}>{curCategory.label}</h3>
                )}
                <ul className={stls.testimonials}>
                  {testimonials
                    .filter(testimonial => testimonial.item)
                    .map((testimonial, idx) => (
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
              <div className={cn(stls.btnTabletLaptopDesktop)}>{btn}</div>
            </div>
            <div className={stls.imgTabletLaptopDesktopContainer}>
              <ImgStudyCost classNames={[stls.imgTabletLaptopDesktop]} />
            </div>
          </div>
        </div>
        <ImgStudyCost classNames={[stls.imgPhone]} />
        <div className={cn(stls.btnPhone)}>{btn}</div>
      </Wrapper>
    </section>
  )
}

export default SectionProgramStudyCost
