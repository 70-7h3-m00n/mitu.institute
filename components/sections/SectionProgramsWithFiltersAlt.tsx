import stls from '@/styles/components/sections/SectionProgramsWithFiltersAlt.module.sass'
import {
  TypeBtnAlphaVariant,
  TypeClassNames,
  TypeLibProgramsStudyFields,
  TypePagePromoProps
} from '@/types/index'
import { Fragment, MouseEventHandler, useContext, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesFront, selectors, colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import {
  ContextCategoriesContext,
  ContextStudyFieldContext,
  ContextProgramsContext
} from '@/context/index'
import { Wrapper } from '@/components/layout'
import {
  GeneralSectionTitle,
  GeneralPopup,
  GeneralProgramsFilters
} from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { CardProgram, CardsProgram } from '@/components/cards'
import { BtnAlpha } from '@/components/btns'
import { IconSearch, IconInfo, IconCheckAlt } from '@/components/icons'

type TStudyFields = {
  type: string | null
  slug: string | null
  title: string | null
}[]

type TypeSectionProgramsWithFiltersAltProps = TypeClassNames & {
  studyFields: TStudyFields | null
}

const SectionProgramsWithFiltersAlt = ({
  classNames,
  studyFields
}: TypeSectionProgramsWithFiltersAltProps) => {
  const { categories, curCategory, setCategories } = useContext(
    ContextCategoriesContext
  )
  const { studyField: studyFieldContext } = useContext(ContextStudyFieldContext)
  const { programs } = useContext(ContextProgramsContext)

  const [searchValue, setSearchValue] = useState('')
  const [appliedStudyFields, setAppliedStudyFields] = useState<
    TStudyFields | []
  >([])

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.heading}>
          <h1 className={stls.title}>
            <span className={stls.laptopDesktop}>Программы</span>
            <span className={stls.phoneTablet}>
              {curCategory?.label || 'Все программы'}
            </span>
          </h1>
          <p className={stls.programsCounter}>
            <span className={stls.tabletLaptopDesktop}>Более </span>
            <span className={stls.highlight}>
              {Math.round((programs?.length || 100) / 10) * 10}
              <span className={stls.phone}>+</span>
            </span>{' '}
            <span className={stls.tabletLaptopDesktop}>программ</span>
          </p>
        </div>
        <div className={cn(stls.underheading, stls.laptopDesktop)}>
          <GeneralSectionTitle classNames={[stls.GeneralSectionTitle]}>
            {curCategory?.label || 'Все программы'}
          </GeneralSectionTitle>
          <ul className={stls.categories}>
            <li className={stls.categoryItem}>
              <Link href={routesFront.programs}>
                <a
                  className={cn(stls.categoryLink, {
                    [stls.isActive]: !curCategory
                  })}>
                  Все&nbsp;программы
                </a>
              </Link>
            </li>
            {categories?.map((category, idx) => (
              <li
                key={`${
                  category?.label || 'SectionProgramsWithFiltersAlt__category'
                }-${idx}`}
                className={stls.categoryItem}>
                <Link
                  href={`${routesFront.programs}/${
                    category?.slug || 'category'
                  }`}>
                  <a
                    className={cn(stls.categoryLink, {
                      [stls.isActive]: curCategory?.slug === category?.slug
                    })}>
                    <span className={stls.categoryLinkLabel}>
                      {category?.label?.split(' ').join('\u00A0')}
                    </span>
                    <div className={stls.iconInfoContainer}>
                      <IconInfo classNames={[cn(stls.iconInfo)]} />
                      {category?.description && (
                        <div className={stls.categoryInfoDescription}>
                          {category?.description}
                        </div>
                      )}
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={stls.content}>
          <div className={cn(stls.left, stls.laptopDesktop)}>
            <h3 className={stls.h3}>
              {/* {appliedStudyFields.length > 0
                ? appliedStudyFields.map((appliedStudyField, idx) => (
                    <span
                      key={`appliedStudyField-${appliedStudyField.title}-${idx}`}>
                      {appliedStudyField.title}{' '}
                    </span>
                  ))
                : 'Все направления'} */}
              Все направления
            </h3>
            <ul className={stls.studyFields}>
              {studyFields?.map((studyField, idx) => (
                <li
                  key={`${studyField?.title}-${idx}`}
                  className={stls.studyFieldItem}>
                  <a
                    href='#!'
                    className={cn(stls.studyFieldBtn, {
                      [stls.isActive]: appliedStudyFields.some(
                        appliedStudyField =>
                          appliedStudyField?.slug === studyField?.slug
                      )
                    })}
                    onClick={() => {
                      if (
                        appliedStudyFields.some(
                          appliedStudyField =>
                            appliedStudyField?.slug === studyField?.slug
                        )
                      ) {
                        setAppliedStudyFields([
                          ...appliedStudyFields.filter(
                            appliedStudyField =>
                              appliedStudyField?.slug !== studyField?.slug
                          )
                        ])
                      } else {
                        setAppliedStudyFields([
                          ...appliedStudyFields,
                          studyField
                        ])
                      }
                    }}>
                    <div
                      className={cn(stls.IconCheckAltContainer, {
                        [stls.isActive]: appliedStudyFields.some(
                          appliedStudyField =>
                            appliedStudyField?.slug === studyField?.slug
                        )
                      })}>
                      <IconCheckAlt
                        color={colors.upsilon}
                        classNames={[stls.IconCheckAlt]}
                      />
                    </div>
                    <span className={stls.studyFieldTitle}>
                      {studyField.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={stls.right}>
            <div className={stls.searchContainer}>
              <input
                className={stls.searchInput}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder={'Введите название программы'}
                title={searchValue || 'Введите название программы'}
              />
              <div className={stls.iconSearchContainer}>
                <IconSearch classNames={[stls.IconSearch]} />
              </div>
            </div>
            <CardsProgram
              classNames={[cn(stls.cardsProgram, stls.CardsProgram)]}
              atSectionProgramsWithFilters
              appliedStudyFields={appliedStudyFields}
              searchTerm={searchValue}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionProgramsWithFiltersAlt
