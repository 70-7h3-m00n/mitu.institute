import stls from '@/styles/components/cards/CardsProgram.module.sass'
import { TypeClassNames, TypeLibPrograms } from '@/types/index'
import Link from 'next/link'
import { MouseEventHandler, useContext, useState, useEffect } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesFront, mituinstitute } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { ProgramStudyDuration } from '@/components/program'
import { IconClock, IconArrowTopRight } from '@/components/icons'
import {
  ContextProgramsContext,
  ContextCategoriesContext
} from '@/context/index'

type TypeCardsProgramProps = TypeClassNames & {
  promo?: boolean
}

const CardsProgram = ({ classNames, promo }: TypeCardsProgramProps) => {
  const { programs } = useContext(ContextProgramsContext)
  const { curCategory } = useContext(ContextCategoriesContext)
  const [cards, setCards] = useState<TypeLibPrograms | null>(null)

  useEffect(() => {
    curCategory?.type
      ? setCards(
          programs?.filter(
            program => program?.category?.type === curCategory.type
          ) || null
        )
      : setCards(programs || null)
  }, [curCategory, programs])

  if (!programs) return <></>

  return (
    <ul
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {cards?.map((card, idx) => (
        <li
          key={(card.title || 'CardsProgram_card') + idx}
          className={stls.card}>
          {promo ? (
            <Popup
              trigger={() => (
                <button className={stls.btn}>
                  <div className={stls.label}>{card?.study_field?.label}</div>
                  <div className={stls.top}>
                    <h3 className={stls.title}>{card.title}</h3>
                    <p className={stls.desc}>{card.shortDescription}</p>
                  </div>
                  <div className={stls.bottom}>
                    <div className={stls.studyDuration}>
                      {card?.timenprice?.[0]?.studyMonthsDuration && (
                        <>
                          <IconClock classNames={[stls.iconClock]} />
                          <ProgramStudyDuration
                            studyDurationMonths={
                              Number(
                                card?.timenprice?.[0]?.studyMonthsDuration
                              ) || 0
                            }
                            yearsOnly
                          />
                        </>
                      )}
                    </div>
                    <div className={stls.learnMore}>
                      <div className={stls.learnMoreLabel}>Подробнее</div>
                      <IconArrowTopRight
                        classNames={[stls.iconArrowTopRight]}
                      />
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
          ) : (
            <Link
              href={
                `${routesFront.programs}/${
                  card?.category?.slug || 'category'
                }/${card?.study_field?.slug || 'study-field'}/${card?.slug}` ||
                '/'
              }>
              <a className={stls.btn}>
                {mituinstitute && (
                  <div className={stls.label}>{card?.study_field?.label}</div>
                )}
                <div className={stls.top}>
                  <h3 className={stls.title}>{card.title}</h3>
                  <p className={stls.desc}>{card.shortDescription}</p>
                </div>
                <div className={stls.bottom}>
                  {mituinstitute && (
                    <div className={stls.studyDuration}>
                      {card?.timenprice?.[0]?.studyMonthsDuration && (
                        <>
                          <IconClock classNames={[stls.iconClock]} />
                          <ProgramStudyDuration
                            studyDurationMonths={
                              Number(
                                card?.timenprice?.[0]?.studyMonthsDuration
                              ) || 0
                            }
                            yearsOnly
                          />
                        </>
                      )}
                    </div>
                  )}
                  <div className={stls.learnMore}>
                    <div className={stls.learnMoreLabel}>Подробнее</div>
                    <IconArrowTopRight classNames={[stls.iconArrowTopRight]} />
                  </div>
                </div>
              </a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

export default CardsProgram
