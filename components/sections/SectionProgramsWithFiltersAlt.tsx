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
import Highlighter from 'react-highlight-words'
import {
  ContextCategoriesContext,
  ContextStudyFieldContext,
  ContextProgramsContext
} from '@/context/index'
import { Wrapper } from '@/components/layout'
import {
  GeneralSectionTitle,
  GeneralPopup,
  GeneralProgramsFilters,
  GeneralLogo
} from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { CardProgram, CardsProgram } from '@/components/cards'
import { BtnAlpha } from '@/components/btns'
import {
  IconSearch,
  IconInfo,
  IconCheckAlt,
  IconPointerBottom,
  IconCross
} from '@/components/icons'

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
              {curCategory?.label || 'Все\u00A0программы'}
            </span>
          </h1>
          <p className={stls.programsCounter}>
            <span className={stls.tabletLaptopDesktop}>Более </span>
            <span
              className={stls.highlight}
              title={`${
                Math.round((programs?.length || 100) / 10) * 10
              } программ`}>
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
            <div className={cn(stls.filterBtns, stls.phoneTablet)}>
              <Popup
                trigger={() => (
                  <BtnAlpha
                    variant='beta'
                    classNames={[stls.filterBtn, stls.filterBtnLeft]}>
                    <span className={stls.btnText}>Все программы</span>
                    <IconPointerBottom classNames={[stls.IconPointerBottom]} />
                  </BtnAlpha>
                )}
                modal
                lockScroll
                nested
                closeOnDocumentClick
                className='SectionProgramsWithFiltersAlt_filter_popup'>
                {(close: MouseEventHandler) => (
                  <div className={stls.GeneralPopup}>
                    <div className={stls.heading}>
                      <GeneralLogo classNames={[stls.GeneralLogo]} withTitle />
                      <a
                        href='#'
                        onClick={close}
                        className={stls.IconCrossLink}>
                        <IconCross
                          classNames={[stls.IconCross]}
                          color={colors.omega}
                        />
                      </a>
                    </div>
                    <h3 className={stls.GeneralPopupTitle}>
                      Выберите программу
                    </h3>
                    <ul className={stls.list}>
                      <li className={stls.listItem}>
                        <Link href={routesFront.programs}>
                          <a
                            className={cn(stls.listItemLink, {
                              [stls.isActive]: !curCategory
                            })}>
                            <div className={stls.listItemLinkCircle}></div>
                            <div className={stls.listItemText}>
                              <span className={stls.listItemLinkLabel}>
                                Все программы
                              </span>
                            </div>
                          </a>
                        </Link>
                      </li>
                      {categories?.map((category, idx) => (
                        <li
                          className={stls.listItem}
                          key={`${category.label}-${idx}`}>
                          <Link
                            href={`${routesFront.programs}/${category.slug}`}>
                            <a
                              className={cn(stls.listItemLink, {
                                [stls.isActive]:
                                  curCategory?.slug === category?.slug
                              })}
                              onClick={close}>
                              <div className={stls.listItemLinkCircle}></div>
                              <div className={stls.listItemText}>
                                <span className={stls.listItemLinkLabel}>
                                  {category.label}
                                </span>
                                <p className={stls.listItemLinkDescription}>
                                  {category.description}
                                </p>
                              </div>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Popup>

              <Popup
                trigger={() => (
                  <BtnAlpha
                    variant='beta'
                    classNames={[stls.filterBtn, stls.filterBtnRight]}>
                    <span className={stls.btnText}>Все направления</span>
                    <IconPointerBottom classNames={[stls.IconPointerBottom]} />
                  </BtnAlpha>
                )}
                modal
                lockScroll
                nested
                closeOnDocumentClick
                className='SectionProgramsWithFiltersAlt_filter_popup'>
                {(close: MouseEventHandler) => (
                  <div className={stls.GeneralPopup}>
                    <div className={stls.heading}>
                      <GeneralLogo classNames={[stls.GeneralLogo]} withTitle />
                      <a
                        href='#'
                        onClick={close}
                        className={stls.IconCrossLink}>
                        <IconCross
                          classNames={[stls.IconCross]}
                          color={colors.omega}
                        />
                      </a>
                    </div>
                    <h3 className={stls.GeneralPopupTitle}>
                      Выберите направления
                    </h3>
                    <ul className={stls.list}>
                      {studyFields?.map((studyField, idx) => (
                        <li
                          key={`${studyField?.title}-mobile-${idx}`}
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
                                      appliedStudyField?.slug !==
                                      studyField?.slug
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
                    <BtnAlpha
                      variant='beta'
                      onClick={close}
                      classNames={[stls.BtnAlphaApplyStudyFields]}>
                      Применить
                    </BtnAlpha>
                  </div>
                )}
              </Popup>
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
