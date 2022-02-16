import stls from '@/styles/components/sections/SectionProgramHero.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import { useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { mituinstitute } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralTextHighlight, GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { ProgramAdmission, ProgramStudyDuration } from '@/components/program'
import { ImgProgramHero } from '@/components/imgs'
import { IconCheck } from '@/components/icons'

type TypeSectionProgramHeroProps = TypeClassNames

const SectionProgramHero = ({ classNames }: TypeSectionProgramHeroProps) => {
  const { program } = useContext(ContextProgramContext)

  if (!program?.title) return <></>

  const testimonials = [
    {
      val: mituinstitute ? (
        <ProgramStudyDuration
          studyDurationMonths={
            Number(program.timenprice?.[0]?.studyMonthsDuration) || 12
          }
        />
      ) : (
        '4-5 лет'
      ),
      label: 'Срок обучения'
    },
    {
      val: 'Дистанционная',
      label: 'Форма обучения'
    },
    {
      val: <ProgramAdmission />,
      label: 'Зачисление'
    },
    {
      val: mituinstitute
        ? 'Государственный диплом'
        : 'Престижный диплом о высшем образовании',
      label: 'Диплом'
    }
  ]
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <div className={stls.top}>
          <div className={stls.heading}>
            <h1 className={stls.title}>{program?.title}</h1>
            {program.description && (
              <p className={stls.description}>{program.description}</p>
            )}
          </div>
          <ImgProgramHero classNames={[stls.img]} />
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
          {testimonials.map((testimonial, idx) => (
            <li key={testimonial.label + idx} className={stls.testimonialItem}>
              <IconCheck withBg classNames={[stls.testimonialIcon]} />
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
