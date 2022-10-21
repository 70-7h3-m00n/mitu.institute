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

  const translations = {
    studyDuration: at.en
      ? 'Study duration'
      : at.uz
      ? "O'qish davomiyligi"
      : 'Длительность обучения',
    studyFormatOnline: at.en
      ? 'Remote'
      : at.uz
      ? 'Masofadan turib'
      : 'Дистанционная',
    studyFormatOffline: at.en
      ? 'Full-time, part-time, part-time with the use of distance learning technologies'
      : at.uz
      ? 'Masofaviy ta’lim texnologiyalaridan foydalangan holda kunduzgi, sirtqi, sirtqi ta’lim'
      : 'Очная, очно-заочная, заочная с применением дистанционных технологий обучения',
    closestAdmission: at.en
      ? 'Next Enrollment'
      : at.uz
      ? "Eng yaqin ro'yxatga olish"
      : 'Ближайшее зачисление',
    everyMonth: at.en ? 'Monthly' : at.uz ? 'Oylik' : 'Ежемесячно',
    stateDiploma: at.en
      ? 'Prestigious diploma of higher education'
      : at.uz
      ? "Oliy ma'lumot to'g'risidagi nufuzli diplom"
      : 'Престижный диплом о высшем образовании',
    moneyBack: at.en
      ? 'Refund'
      : at.uz
      ? 'Pulni qaytarib berish'
      : 'Возврат денег',
    moneyBackDesc: at.en
      ? 'If you change your mind about studying, we will refund the full amount within the first two weeks'
      : at.uz
      ? "Agar fikringizni o'rganishni o'zgartirsangiz, dastlabki ikki hafta ichida to'liq miqdorni qaytarib beramiz"
      : 'Если вы передумаете учиться, то мы вернем полную сумму в течение первых двух недель',
    savePercent: at.en
      ? 'Save 13%'
      : at.uz
      ? '13ni saqlang%'
      : 'Сэкономьте 13%',
    savePercentDesc: at.en
      ? 'Get a tax deduction. All details at the manager when registering for the course'
      : at.uz
      ? 'Soliq imtiyozini oling. Kursga yozilayotganda menejerning barcha tafsilotlari'
      : 'Получите налоговый вычет. Все подробности у менеджера при записи на курс',
    questionsLeft: at.en
      ? 'Questions left?'
      : at.uz
      ? 'Savollar bormi?'
      : 'Остались вопросы?',
    callOrMsgUs: at.en
      ? 'Call or write to us'
      : at.uz
      ? "Bizga qo'ng'iroq qiling yoki yozing"
      : 'Позвоните или напишите нам',
    phoneNumber: at.en
      ? company.phoneNumberUz
      : at.uz
      ? company.phoneNumberUz
      : company.phoneNumber,
    leaveRequest: at.en
      ? 'Submit'
      : at.uz
      ? "So'rov qoldiring"
      : 'Оставить заявку',
    studyCost: at.en
      ? 'Cost of study'
      : at.uz
      ? "O'qish narxi"
      : 'Стоимость обучения',
    discount: at.en ? 'Discount' : at.uz ? 'Chegirma ' : 'Скидка',
    installment: at.en ? (
      'Interest-free installment'
    ) : at.uz ? null : (
      <>Беспроцентная рассрочка на&nbsp;</>
    ),
    months: at.en ? 'month' : at.uz ? 'oy' : 'месяцев',
    installmentAfter: at.en ? null : at.uz ? ' davomida foizsiz uzishiga' : null
  }

  const { program } = useContext(ContextProgramContext)
  const { curCategory } = useContext(ContextCategoriesContext)

  if (!program?.timenprice?.[0]?.price || !program?.timenprice?.[0]?.discount)
    return <></>

  const atAdditional = program?.category?.type === 'additional' && mituinstitute

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
                {translations.studyDuration}{' '}
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
            id: 'studyFormat',
            item: mituinstitute
              ? translations.studyFormatOnline
              : translations.studyFormatOffline
          },
          {
            id: 'SectionProgramStudyCostProgramAdmission',
            item: mituinstitute ? (
              <>
                {translations.closestAdmission} <ProgramAdmission />
              </>
            ) : (
              translations.everyMonth
            )
          },
          {
            id: 'SectionProgramStudyCostDiploma',
            item: mituinstitute
              ? // <>Государственный диплом</>
                null
              : translations.stateDiploma,
            highlight: true
          }
        ]

  const bottomInfos = [
    {
      title: translations.moneyBack,
      desc: translations.moneyBackDesc
    },
    {
      title: translations.savePercent,
      desc: translations.savePercentDesc
    },
    {
      title: translations.questionsLeft,
      desc: (
        <>
          {translations.callOrMsgUs}:{' '}
          <a className={stls.phoneNumber} href={translations.phoneNumber.href}>
            {translations.phoneNumber.val}
          </a>
        </>
      )
    }
  ]

  const btn = (
    <Popup
      trigger={() => (
        <BtnAlpha variant='gamma'>{translations.leaveRequest}</BtnAlpha>
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
  )

  // TODO: improve styles for this section & rub sign + phone layout
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>{translations.studyCost}</GeneralSectionTitle>
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
                  {translations.discount} <br />
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
              {translations.installment}
              <GeneralTextHighlight>
                12&nbsp;{translations.months}
              </GeneralTextHighlight>
              {translations.installmentAfter}
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
