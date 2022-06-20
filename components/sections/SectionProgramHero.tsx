import stls from '@/styles/components/sections/SectionProgramHero.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import { useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { mituinstitute, colors, selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
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
  const { program } = useContext(ContextProgramContext)

  if (!program?.title) return <></>

  const atAdditional = program?.category?.type === 'additional'

  const testimonialDiplomaVal = mituinstitute
    ? atAdditional
      ? 'Диплом о переподготовке'
      : 'Государственный диплом'
    : 'Престижный диплом о высшем образовании'

  const testimonials = [
    {
      label: 'Срок обучения',
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
                Как сократить?
              </p>
            ),
            content: (
              <p className={stls.testimonialHintContentP}>
                Можно окончить экстерном, тем самым сократив срок обучения{' '}
                <br />{' '}
                <span className={stls.highlight}>
                  до{' '}
                  <ProgramStudyDuration
                    studyDurationMonths={
                      (Number(program.timenprice?.[0]?.studyMonthsDuration) ||
                        12) / 2
                    }
                  />
                </span>
              </p>
            )
          }
        : null
    },
    {
      label: 'Форма обучения',
      val: mituinstitute
        ? 'Дистанционная'
        : 'Очная, очно-заочная, заочная с применением дистанционных технологий обучения'
    },
    {
      label: 'Зачисление',
      val: mituinstitute ? <ProgramAdmission /> : 'Ежемесячно'
    },
    {
      label: 'Диплом',
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
                  {testimonialDiplomaVal} — это официальный документ, который
                  подтверждает прохождение программы
                </p>

                <p className={stls.testimonialHintContentP}>
                  Все выданные дипломы вносятся в{' '}
                  <GeneralTextHighlight>
                    ФРДО — Федеральный реестр сведений о документах об
                    образовании
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
            label: 'Количество часов',
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
            {/* <p className={stls.discount}>
              Скидка <br />
              <span className={stls.bold}>
                — {Number(program?.timenprice?.[0]?.discount)}%
              </span>
            </p> */}
          </div>
        </div>
        <div className={stls.btns}>
          <Popup
            trigger={() => (
              <BtnAlpha variant='gamma' classNames={[stls.btn]}>
                Записаться на курс
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
                Задать вопрос
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
