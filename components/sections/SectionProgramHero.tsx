import stls from '@/styles/components/sections/SectionProgramHero.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import { useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { mituinstitute, colors, selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralTextHighlight, GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { ProgramAdmission, ProgramStudyDuration } from '@/components/program'
import { ImgProgramHero } from '@/components/imgs'
import { IconCheck, IconInfo } from '@/components/icons'

type TypeSectionProgramHeroProps = TypeClassNames

const SectionProgramHero = ({ classNames }: TypeSectionProgramHeroProps) => {
  const at = useAt()

  const translations = {
    studyDuration: at.en
      ? 'Study duration'
      : at.uz
      ? 'Trening davri'
      : 'Срок обучения',
    professionalRetrainingDiploma: at.en
      ? 'Retraining diploma'
      : at.uz
      ? 'Qayta tayyorlash diplomi'
      : 'Диплом о переподготовке',
    stateDiploma: at.en
      ? 'State diploma'
      : at.uz
      ? 'Davlat diplomi'
      : 'Государственный диплом',
    higherEducationDiplomaNotMituinstitute: at.en
      ? 'Prestigious diploma of higher education'
      : at.uz
      ? "Oliy ma'lumot to'g'risidagi nufuzli diplom"
      : 'Престижный диплом о высшем образовании',
    testimonialStudyDurationHintTitle: at.en
      ? 'How to cut it?'
      : at.uz
      ? 'Qanday qilib kesish kerak?'
      : 'Как сократить?',
    testimonialHintContentP: at.en
      ? 'You can graduate as an external student, thereby reducing the period of study'
      : at.uz
      ? "Tashqi tomondan tugatilishi mumkin, shu bilan o'qish muddatini qisqartiradi"
      : 'Можно окончить экстерном, тем самым сократив срок обучения',
    until: at.en ? 'until' : at.uz ? '' : 'до',
    untilAfter: at.en ? '' : at.uz ? 'oyga' : '',
    studyForm: at.en
      ? 'Study format'
      : at.uz
      ? "Ta'lim shakli"
      : 'Форма обучения',
    studyFormOnline: at.en
      ? 'remote'
      : at.uz
      ? 'Masofadan turib'
      : 'Дистанционная',
    studyFormOnlineAltNotMituinstitute: at.en
      ? 'Full-time, part-time, part-time with the use of distance learning technologies'
      : at.uz
      ? 'Masofaviy ta’lim texnologiyalaridan foydalangan holda kunduzgi, sirtqi, sirtqi ta’lim'
      : 'Очная, очно-заочная, заочная с применением дистанционных технологий обучения',
    admission: at.en ? 'Enrollment' : at.uz ? 'Qabul' : 'Зачисление',
    everyMonthNotMituinstitute: at.en
      ? 'Monthly'
      : at.uz
      ? 'Oylik'
      : 'Ежемесячно',
    diploma: at.en ? 'Diploma' : at.uz ? 'Diplom' : 'Диплом',
    testimonialHintContentP2: at.en
      ? 'is an official document that confirms the completion of the program'
      : at.uz
      ? "- dasturning o'tishini tasdiqlovchi rasmiy hujjat barcha"
      : '— это официальный документ, который подтверждает прохождение программы',
    testimonialHintContentP3: at.en
      ? 'All issued diplomas are entered into'
      : at.uz
      ? "berilgan diplomlar frdo-ta'lim to'g'risidagi hujjatlar to'g'risidagi ma'lumotlarning Federal reestriga kiritiladi"
      : 'Все выданные дипломы вносятся в',
    testimonialHintContentP3Highlight: at.uz
      ? 'FRDE - Federal Register of Information on Documents of Education'
      : 'ФРДО — Федеральный реестр сведений о документах об образовании',
    hoursAmount: at.en
      ? 'Number of hours'
      : at.uz
      ? 'Soatlar soni'
      : 'Количество часов',
    discount: at.en ? 'Discount' : at.uz ? 'Chegirma' : 'Скидка',
    signUpForCourse: at.en
      ? 'Sign up for a course'
      : at.uz
      ? 'Kursga yoziling'
      : 'Записаться на курс',
    askQuestion: at.en
      ? 'Ask a question'
      : at.uz
      ? 'Savol bermoq'
      : 'Задать вопрос'
  }

  const { program } = useContext(ContextProgramContext)

  if (!program?.title) return <></>

  const atAdditional = program?.category?.type === 'additional' && mituinstitute

  const testimonialDiplomaVal = mituinstitute
    ? atAdditional
      ? translations.professionalRetrainingDiploma
      : translations.stateDiploma
    : translations.higherEducationDiplomaNotMituinstitute

  const testimonials = [
    {
      label: translations.studyDuration,
      val: (
        <ProgramStudyDuration
          studyDurationMonths={
            Number(program.timenprice?.[0]?.studyMonthsDuration) || 12
          }
        />
      ),
      hint: atAdditional
        ? {
            title: (
              <p className={stls.testimonialStudyDurationHintTitle}>
                {translations.testimonialStudyDurationHintTitle}
              </p>
            ),
            content: (
              <p className={stls.testimonialHintContentP}>
                {translations.testimonialHintContentP} <br />{' '}
                <span className={stls.highlight}>
                  {translations.until}{' '}
                  <ProgramStudyDuration
                    studyDurationMonths={
                      (Number(program.timenprice?.[0]?.studyMonthsDuration) ||
                        12) / 2
                    }
                  />
                  {translations.untilAfter}
                </span>
              </p>
            )
          }
        : null
    },
    {
      label: translations.studyForm,
      val: mituinstitute
        ? program?.study_form?.label || translations.studyFormOnline
        : translations.studyFormOnlineAltNotMituinstitute
    },
    {
      label: translations.admission,
      val: mituinstitute ? (
        <ProgramAdmission />
      ) : (
        translations.everyMonthNotMituinstitute
      )
    },
    {
      label: translations.diploma,
      val: testimonialDiplomaVal,
      hint: atAdditional
        ? {
            title: (
              <div className={stls.testimonialDiplomaHintTitle}>
                <IconInfo
                  classNames={[stls.IconInfo]}
                  color={colors.upsilon}
                  color2={colors.beta}
                />
              </div>
            ),
            content: (
              <>
                <p className={stls.testimonialHintContentP}>
                  {testimonialDiplomaVal}{' '}
                  {translations.testimonialHintContentP2}
                </p>

                <p className={stls.testimonialHintContentP}>
                  {translations.testimonialHintContentP3}{' '}
                  <GeneralTextHighlight>
                    {translations.testimonialHintContentP3Highlight}
                  </GeneralTextHighlight>
                </p>
              </>
            )
          }
        : null
    },
    {
      ...(atAdditional
        ? {
            label: translations.hoursAmount,
            val: Number(program.timenprice?.[0]?.studyHours) || 546
          }
        : undefined)
    }
  ]
  return (
    <section
      className={
        cn(
          stls.container,
          selectors.sectionHero,
          getClassNames({ classNames })
        ) || undefined
      }>
      <Wrapper>
        <div className={stls.top}>
          <div className={stls.heading}>
            <h1 className={stls.title}>{program?.title}</h1>
            {program.description && (
              <p className={stls.description}>{program.description}</p>
            )}
          </div>
          <div className={stls.right}>
            <ImgProgramHero classNames={[stls.img]} />
            {atAdditional && (
              <p className={stls.discount}>
                {translations.discount} <br />
                <span className={stls.bold}>
                  — {Number(program?.timenprice?.[0]?.discount)}%
                </span>
              </p>
            )}
          </div>
        </div>
        <div className={stls.btns}>
          <Popup
            trigger={() => (
              <BtnAlpha variant='gamma' classNames={[stls.btn]}>
                {translations.signUpForCourse}
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
          <Popup
            trigger={() => (
              <BtnAlpha variant='gamma-reverse' classNames={[stls.btn]}>
                {translations.askQuestion}
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
        <ul className={stls.testimonials}>
          {testimonials
            .filter(testimonial => testimonial?.label)
            .map((testimonial, idx) => (
              <li
                key={`${testimonial?.label}-${idx}`}
                className={cn(stls.testimonialItem, {
                  [stls.notAtAdditional]: !atAdditional,
                  [stls.atAdditional]: atAdditional
                })}>
                <div className={stls.testimonialTop}>
                  <IconCheck withBg />
                  {testimonial?.hint && (
                    <Popup
                      trigger={open => (
                        <a
                          href='#!'
                          className={cn(stls.testimonialHint, {
                            [stls.testimonialHintOpen]: open
                          })}>
                          {testimonial?.hint?.title}
                        </a>
                      )}
                      position='top right'
                      closeOnDocumentClick
                      keepTooltipInside={`.${selectors.sectionHero}`}>
                      <div className={stls.testimonialHintPopupContent}>
                        {testimonial?.hint?.content}
                      </div>
                    </Popup>
                  )}
                </div>
                <p className={stls.testimonialLabel}>{testimonial.label}</p>
                <p className={stls.testimonialVal}>{testimonial.val}</p>
              </li>
            ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionProgramHero
