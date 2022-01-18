import stls from '@/styles/components/sections/SectionOurPrograms.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { ProgramStudyDuration } from '@/components/program'
import { BtnAlpha } from '@/components/btns'
import { IconClock, IconArrowTopRight } from '@/components/icons'

type TypeSectionOurProgramsProps = TypeClassNames

const SectionOurPrograms = ({ classNames }: TypeSectionOurProgramsProps) => {
  const cards = [
    {
      faculty: {
        type: 'computer science',
        label: 'Факультет компьютерных наук'
      },
      title: 'Управление организацией',
      desc: 'Целью программы является подготовка квалифицированных менеджеров для работы в системе здравоохранения',
      studyMonths: 16
    },
    {
      faculty: {
        type: 'management',
        label: 'Факультет управления'
      },
      title: 'Управление организацией',
      desc: 'Займите свое место в одной из самых успешных отраслей страны. Научитесь строить экономические модели',
      studyMonths: 12
    },
    {
      faculty: {
        type: 'psychology',
        label: 'Факультет психологии'
      },
      title: 'Менеджмент наукоемких производств нефтегазохимического комплекса',
      desc: 'Целью программы является подготовка квалифицированных менеджеров для работы в системе здравоохранения',
      studyMonths: 8
    },
    {
      faculty: {
        type: 'computer science',
        label: 'Факультет компьютерных наук'
      },
      title: 'Управление организацией',
      desc: 'Целью программы является подготовка квалифицированных менеджеров для работы в системе здравоохранения',
      studyMonths: 16
    },
    {
      faculty: {
        type: 'management',
        label: 'Факультет управления'
      },
      title: 'Управление организацией',
      desc: 'Займите свое место в одной из самых успешных отраслей страны. Научитесь строить экономические модели',
      studyMonths: 12
    },
    {
      faculty: {
        type: 'management',
        label: 'Факультет управления'
      },
      title: 'Управление организацией',
      desc: 'Займите свое место в одной из самых успешных отраслей страны. Научитесь строить экономические модели',
      studyMonths: 12
    }
  ]

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <GeneralSectionTitle classNames={[stls.title]}>
          Наши направления
        </GeneralSectionTitle>
        <div className={stls.content}>
          <div className={stls.btns}>btns</div>
          <ul className={stls.cards}>
            {cards.map((card, idx) => (
              <li key={card.title + idx} className={stls.card}>
                <div className={stls.cardLabel}>{card.faculty.label}</div>
                <div className={stls.cardTop}>
                  <h4 className={stls.cardTitle}>{card.title}</h4>
                  <p className={stls.cardDesc}>{card.desc}</p>
                </div>
                <div className={stls.cardBottom}>
                  <div className={stls.cardStudyDuration}>
                    <IconClock classNames={[stls.iconClock]} />
                    <ProgramStudyDuration
                      studyDurationMonths={card.studyMonths}
                      monthsOnly
                    />
                  </div>
                  <div className={stls.cardLearnMore}>
                    Подробнее
                    <IconArrowTopRight classNames={[stls.iconArrowTopRight]} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Popup
            trigger={() => (
              <BtnAlpha variant='beta' classNames={[stls.btn]}>
                Показать ещё
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
      </Wrapper>
    </section>
  )
}

export default SectionOurPrograms
