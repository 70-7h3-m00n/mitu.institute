import stls from '@/styles/components/cards/CardsProgram.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { cardsProgram } from '@/data/index'
import { getClassNames } from '@/helpers/index'
import { GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { ProgramStudyDuration } from '@/components/program'
import { IconClock, IconArrowTopRight } from '@/components/icons'

type TypeCardsProgramProps = TypeClassNames

const CardsProgram = ({ classNames }: TypeCardsProgramProps) => {
  return (
    <ul
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {cardsProgram.map((card, idx) => (
        <li key={card.title + idx} className={stls.card}>
          <Popup
            trigger={() => (
              <button className={stls.btn}>
                <div className={stls.label}>{card.faculty.label}</div>
                <div className={stls.top}>
                  <h4 className={stls.title}>{card.title}</h4>
                  <p className={stls.desc}>{card.desc}</p>
                </div>
                <div className={stls.bottom}>
                  <div className={stls.studyDuration}>
                    <IconClock classNames={[stls.iconClock]} />
                    <ProgramStudyDuration
                      studyDurationMonths={card.studyMonths}
                      monthsOnly
                    />
                  </div>
                  <div className={stls.learnMore}>
                    <div className={stls.learnMoreLabel}>Подробнее</div>
                    <IconArrowTopRight classNames={[stls.iconArrowTopRight]} />
                  </div>
                </div>
              </button>
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
        </li>
      ))}
    </ul>
  )
}

export default CardsProgram
