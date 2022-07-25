import stls from '@/styles/components/sections/SectionProgramStudyCost.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler, ReactNode } from 'react'
import { useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { mituinstitute, company } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import {
  ContextCategoriesContext,
  ContextProgramContext
} from '@/context/index'
import { useCompanyInfo } from '@/hooks/index'
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
  const at = useAt()

  const company = useCompanyInfo()
  const { program } = useContext(ContextProgramContext)
  const { curCategory } = useContext(ContextCategoriesContext)

  if (!program?.timenprice?.[0]?.price || !program?.timenprice?.[0]?.discount)
    return <></>

  const atAdditional = program?.category?.type === 'additional'

  const testimonials: {
    id: string
    item?: string | ReactNode | null
    highlight?: boolean | null
  }[] =
    program?.studyCostDescItems && program?.studyCostDescItems?.length > 0
      ? program.studyCostDescItems.map((item, idx) => ({
          id: `SectionProgramStudyCostTestimonial-${idx}`,
          item: item?.item,
          highlight: item?.isBold
        }))
      : [
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

  const bottomInfos = [
    {
      title: 'Возврат денег',
      desc: 'Если вы передумаете учиться, то мы вернем полную сумму в течение первых двух недель'
    },
    {
      title: 'Сэкономьте 13%',
      desc: 'Получите налоговый вычет. Все подробности у менеджера при записи на курс'
    },
    {
      title: 'Остались вопросы?',
      desc: (
        <>
          Позвоните или напишите нам:{' '}
          <a className={stls.phoneNumber} href={company.phoneNumber.href}>
            {company.phoneNumber.val}
          </a>
        </>
      )
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
          <div className={cn(stls.left, { [stls.atAdditional]: atAdditional })}>
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
            {atAdditional && (
              <div className={stls.discount}>
                <p className={stls.discountP}>
                  Скидка <br />
                  <span className={stls.discountHighlight}>
                    <span>
                      —&nbsp;{Number(program?.timenprice?.[0]?.discount)}%
                    </span>
                  </span>
                </p>
              </div>
            )}
            {/* <h3 className={cn(stls.h3, stls.h3Mx)}> */}
            <h3 className={cn(stls.h3)}>
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
        {!atAdditional && <div className={cn(stls.btnPhone)}>{btn}</div>}

        {atAdditional && (
          <div className={stls.testimonialsContainer}>
            <ul className={stls.bottomInfos}>
              {bottomInfos.map((item, idx) => (
                <li
                  key={`${item.title}-${idx}`}
                  className={stls.bottomInfoItem}>
                  <h3 className={stls.bottomInfoTitle}>{item.title}</h3>
                  <p className={stls.bottomInfoDesc}>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {atAdditional && <div className={cn(stls.btnPhone)}>{btn}</div>}
      </Wrapper>
    </section>
  )
}

export default SectionProgramStudyCost
