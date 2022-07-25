import stls from '@/styles/components/cards/CardsProgram.module.sass'
import { TypeClassNames, TypeLibPrograms } from '@/types/index'
import Link from 'next/link'
import { MouseEventHandler, useContext, useState, useEffect } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import Highlighter from 'react-highlight-words'
import { routesFront, mituinstitute } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { GeneralPopup, GeneralTextHighlight } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { SectionUIFormAlpha } from '@/components/sections'
import { ProgramStudyDuration } from '@/components/program'
import { IconClock, IconArrowTopRight } from '@/components/icons'
import {
  ContextProgramsContext,
  ContextCategoriesContext,
  ContextStudyFieldContext
} from '@/context/index'

type TStudyFields = {
  type: string | null
  slug: string | null
  title: string | null
}[]

type TypeCardsProgramProps = TypeClassNames & {
  promo?: boolean
  atSectionProgramsWithFilters?: boolean
  max?: number
  cardsStudyFields?: boolean
  appliedStudyFields?: TStudyFields
  searchTerm?: string
}

const CardsProgram = ({
  classNames,
  promo,
  atSectionProgramsWithFilters,
  max,
  cardsStudyFields,
  appliedStudyFields,
  searchTerm
}: TypeCardsProgramProps) => {
  const at = useAt()

  const { programs } = useContext(ContextProgramsContext)
  const { curCategory } = useContext(ContextCategoriesContext)
  const { studyField: studyFieldContext } = useContext(ContextStudyFieldContext)

  const cards = programs
    ?.filter(program =>
      curCategory ? program?.category?.slug === curCategory?.slug : true
    )
    ?.filter(program =>
      studyFieldContext
        ? program?.study_field?.slug === studyFieldContext
        : true
    )
    ?.filter(program =>
      appliedStudyFields && appliedStudyFields.length > 0
        ? appliedStudyFields?.some(
            appliedStudyField =>
              appliedStudyField?.slug === program?.study_field?.slug
          )
        : true
    )
    ?.filter(program =>
      searchTerm
        ? program.title?.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    )
    ?.filter((_, idx) => {
      return max ? idx < max : true
    })

  const nonUniqueStudyFields = programs
    ?.filter(program => curCategory?.slug === program.category?.slug)
    .map(program => program.study_field)

  const studyFields: {
    type: string | null
    slug: string | null
    label: string | null
    title: string | null
  }[] = []

  nonUniqueStudyFields?.forEach(nonUniquestudyField => {
    if (
      nonUniquestudyField &&
      !studyFields.some(
        studyField => studyField.slug === nonUniquestudyField?.slug
      )
    ) {
      studyFields.push(nonUniquestudyField)
    }
  })

  const translations = {
    learnMoreLabel: at.uz ? "Batafsil ma'lumot" : 'Подробнее',
    UIFormAlphaNotFoundTitle: at.uz
      ? "Sizning so'rovingiz bo'yicha hech narsa topilmadi. Iltimos, murojaat qiling mutaxassis. Biz sizga to'g'ri dasturni topishga yordam beramiz"
      : 'По Вашему запросу ничего не найдено. Пожалуйста, свяжитесь со специалистом. Мы поможем Вам подобрать подходящую программу',
    program: at.uz ? 'Dastur' : 'Программа'
  }

  if (!programs || !cards || programs?.length === 0 || cards?.length === 0)
    return (
      <UIFormAlpha
        classNames={[stls.UIFormAlpha]}
        atCardsProgram
        title={
          <>
            <GeneralTextHighlight reverse>
              {translations.UIFormAlphaNotFoundTitle}
            </GeneralTextHighlight>
          </>
        }
      />
    )

  return (
    <ul
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      {!cardsStudyFields
        ? cards?.map((card, idx) => (
            <li
              key={(card.title || 'CardsProgram_card') + idx}
              className={cn(stls.card, {
                [stls.atSectionProgramsWithFilters]:
                  atSectionProgramsWithFilters,
                [stls.default]: !atSectionProgramsWithFilters
              })}>
              {promo ? (
                <Popup
                  trigger={() => (
                    <button className={stls.btn}>
                      <div className={stls.label}>
                        {card?.study_field?.label}
                      </div>
                      <div className={stls.top}>
                        <h3 className={stls.title}>
                          {card?.title || translations.program}
                        </h3>
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
                          <div className={stls.learnMoreLabel}>
                            {translations.learnMoreLabel}
                          </div>
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
                    }/${card?.study_field?.slug || 'study-field'}/${
                      card?.slug
                    }` || '/'
                  }>
                  <a className={stls.btn}>
                    {/* {mituinstitute && (
                  <div className={stls.label}>{card?.study_field?.label}</div>
                )} */}
                    <div className={stls.label}>{card?.category?.label}</div>
                    <div className={stls.top}>
                      {mituinstitute && (
                        <p className={stls.aboveTitle}>
                          {card?.study_field?.label}
                        </p>
                      )}
                      <h3 className={stls.title}>
                        {searchTerm && card.title ? (
                          <Highlighter
                            highlightClassName={stls.highligher}
                            searchWords={[searchTerm]}
                            autoEscape={true}
                            textToHighlight={card?.title}
                          />
                        ) : (
                          card?.title || translations.program
                        )}
                      </h3>
                      {/* <p className={stls.desc}>{card.shortDescription}</p> */}
                    </div>
                    <div className={stls.bottom}>
                      {/* {mituinstitute && (
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
                  )} */}
                      <div className={stls.learnMore}>
                        <div className={stls.learnMoreLabel}>
                          {translations.learnMoreLabel}
                        </div>
                        <IconArrowTopRight
                          classNames={[stls.iconArrowTopRight]}
                        />
                      </div>
                    </div>
                  </a>
                </Link>
              )}
            </li>
          ))
        : studyFields.map((studyField, idx) => (
            <li
              key={`${studyField.title || 'CardsProgram__studyField'}-${idx}`}
              className={cn(stls.card, {
                [stls.atSectionProgramsWithFilters]:
                  atSectionProgramsWithFilters,
                [stls.default]: !atSectionProgramsWithFilters
              })}>
              <Link
                href={
                  `${routesFront.programs}/${curCategory?.slug || 'category'}/${
                    studyField.slug || 'study-field'
                  }` || '/'
                }>
                <a className={stls.btn}>
                  <div className={stls.label}>{curCategory?.label}</div>
                  <div className={stls.top}>
                    <h3 className={stls.title}>{studyField.title}</h3>
                  </div>
                  <div className={stls.bottom}>
                    <div className={stls.learnMore}>
                      <div className={stls.learnMoreLabel}>
                        {translations.learnMoreLabel}
                      </div>
                      <IconArrowTopRight
                        classNames={[stls.iconArrowTopRight]}
                      />
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
    </ul>
  )
}

export default CardsProgram
