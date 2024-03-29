import stls from '@/styles/components/sections/SectionProgramsWithFilters.module.sass'
import {
  TypeBtnAlphaVariant,
  TypeClassNames,
  TypeLibProgramsStudyFields,
  TypePagePromoProps
} from '@/types/index'
import { MouseEventHandler, useContext, useState } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesFront, selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import {
  ContextCategoriesContext,
  ContextStudyFieldContext,
  ContextProgramsContext
} from '@/context/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import {
  GeneralSectionTitle,
  GeneralPopup,
  GeneralProgramsFilters
} from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { CardProgram, CardsProgram } from '@/components/cards'
import { BtnAlpha } from '@/components/btns'
import { IconSearch } from '@/components/icons'

type TypeSectionProgramsWithFiltersProps = TypeClassNames & {
  studyFields:
    | {
        type: string | null
        slug: string | null
        title: string | null
      }[]
    | null
}

const SectionProgramsWithFilters = ({
  classNames,
  studyFields
}: TypeSectionProgramsWithFiltersProps) => {
  const at = useAt()

  const translations = {
    programs: at.en ? 'Programs' : at.uz ? 'Dasturlar' : 'Программы',
    moreThan: at.en ? 'More than' : at.uz ? "Ko'proq" : 'Более',
    hideFilters: at.en
      ? 'Hid filters'
      : at.uz
      ? 'Qaytish filtrlari'
      : 'Свернуть фильтры',
    showFilters: at.en
      ? 'Show filters'
      : at.uz
      ? "Filtrlarni ko'rsatish"
      : 'Показать фильтры'
  }

  const { categories, curCategory, setCategories } = useContext(
    ContextCategoriesContext
  )
  const { studyField: studyFieldContext } = useContext(ContextStudyFieldContext)
  const { programs } = useContext(ContextProgramsContext)

  const [searchTerm, setSearchTerm] = useState('')
  const [filtersAreOpen, setFiltersAreOpen] = useState(false)

  const usedStudyFieldsSlugs = Array.from(
    new Set(
      programs
        ?.filter(program => program.category?.slug === curCategory?.slug)
        .map(program => program.study_field?.slug)
    )
  )

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.heading}>
          <h1 className={stls.title}>{translations.programs}</h1>
          <p className={stls.programsCounter}>
            <span className={stls.tabletLaptopDesktop}>
              {translations.moreThan}{' '}
            </span>
            <span className={stls.highlight}>
              {Math.round((programs?.length || 100) / 10) * 10}
              <span className={stls.phone}>+</span>
            </span>{' '}
            <span className={stls.tabletLaptopDesktop}>
              {translations.programs.toLocaleLowerCase()}
            </span>
          </p>
        </div>
        {/* <div className={stls.searchContainer}>
          <input
            className={stls.search}
            placeholder='Введите название программы'
          />
          <div className={stls.iconSearchContainer}>
            <IconSearch classNames={[stls.IconSearch]} />
          </div>
        </div> */}
        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.filters}>
              <GeneralProgramsFilters />
            </div>
          </div>
          <div className={stls.right}>
            <GeneralSectionTitle
              classNames={[stls.GeneralSectionTitle, stls.laptopDesktop]}>
              {curCategory?.label}
            </GeneralSectionTitle>
            <button
              className={cn(stls.btnToggleFilters, {
                [stls.filtersAreOpen]: filtersAreOpen
              })}
              onClick={() => setFiltersAreOpen(!filtersAreOpen)}>
              {filtersAreOpen
                ? translations.hideFilters
                : translations.showFilters}
            </button>
            <div
              className={cn(stls.filtersContainer, {
                [stls.filtersAreOpen]: filtersAreOpen
              })}>
              <GeneralProgramsFilters
                classNames={[cn(stls.GeneralProgramsFilters, stls.phoneTablet)]}
              />
              <ul className={stls.studyFields}>
                {studyFields
                  ?.filter(studyField =>
                    usedStudyFieldsSlugs?.some(slug => slug === studyField.slug)
                  )
                  .map((studyField, idx) => (
                    <li
                      key={`${
                        studyField?.title ||
                        'SectionProgramsWithFilters__studyField'
                      }-${idx}`}
                      className={stls.studyFieldItem}>
                      <BtnAlpha
                        key={(studyField?.title || 'btn') + idx}
                        tag={'Link'}
                        href={
                          studyFieldContext === studyField?.slug
                            ? `${routesFront.programs}/${curCategory?.slug}`
                            : `${routesFront.programs}/${curCategory?.slug}/${studyField?.slug}`
                        }
                        scroll={false}
                        variant={
                          studyFieldContext === studyField?.slug
                            ? 'beta'
                            : 'eta'
                        }
                        classNames={[stls.btnStudyField]}>
                        {studyField?.title}
                      </BtnAlpha>
                    </li>
                  ))}
              </ul>
            </div>
            <GeneralSectionTitle
              classNames={[stls.GeneralSectionTitle, stls.phoneTablet]}>
              {curCategory?.label}
            </GeneralSectionTitle>
            <CardsProgram
              classNames={[cn(stls.cardsProgram, stls.CardsProgram)]}
              atSectionProgramsWithFilters
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionProgramsWithFilters
