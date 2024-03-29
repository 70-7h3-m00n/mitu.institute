import stls from '@/styles/components/sections/SectionProgramsWithFiltersAlt.module.sass'
import {
  TypeBtnAlphaVariant,
  TypeClassNames,
  TypeLibProgramsStudyFields,
  TypePagePromoProps
} from '@/types/index'
import {
  Fragment,
  MouseEventHandler,
  useContext,
  useEffect,
  useState
} from 'react'
import Link from 'next/link'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import Highlighter from 'react-highlight-words'
import { routesFront, selectors, colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
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
  IconCross,
  IconArrowRight
} from '@/components/icons'
import { useRouter } from 'next/router'

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
  const at = useAt()
  const router = useRouter()

  const translations = {
    btnShowMoreVal: at.en
      ? 'Show all'
      : at.uz
      ? "Hammasini ko'rsatish"
      : 'Показать все',
    btnResetFilters: at.en
      ? 'Clear filters'
      : at.uz
      ? 'Filtrlarni tiklash'
      : 'Сбросить фильтры',
    titleLaptopDesktop: at.en ? 'Programs' : at.uz ? 'Dasturlar' : 'Программы',
    allPrograms: at.en
      ? 'All\u00A0programs'
      : at.uz
      ? 'Barcha dasturlar'
      : 'Все\u00A0программы',
    moreThan: at.en ? 'More than' : at.uz ? "Ko'proq" : 'Более',
    programs: at.en ? 'programs' : at.uz ? 'dasturlari' : 'программ',
    allStudyFields: at.en
      ? 'All study fields'
      : at.uz
      ? "Barcha yo'nalishlar"
      : 'Все направления',
    singleStudyField: at.en
      ? 'Study field'
      : at.uz
      ? "Yo'nalish"
      : 'Направление',
    searchPlaceholder: at.en
      ? 'Type in program name'
      : at.uz
      ? 'Dastur nomini kiriting'
      : 'Введите название программы',
    chooseProgram: at.en
      ? 'Choose program'
      : at.uz
      ? 'Dasturni tanlang'
      : 'Выберите программу',
    chooseStudyField: at.en
      ? 'Choose study field'
      : at.uz
      ? 'Manzillarni tanlang'
      : 'Выберите направления',
    apply: at.en ? 'Apply' : at.uz ? 'Murojaat qiling' : 'Применить',
    searchStudyFieldPlaceholder: at.en
      ? 'Type in study field name'
      : at.uz
      ? "Yo'nalish nomini kiriting"
      : 'Введите название направления'
  }

  const { categories, curCategory, setCategories } = useContext(
    ContextCategoriesContext
  )
  const { studyField: studyFieldContext } = useContext(ContextStudyFieldContext)
  const { programs } = useContext(ContextProgramsContext)

  const [searchValue, setSearchValue] = useState('')
  const [studyFieldsSearchValue, setStudyFieldsSearchValue] = useState('')

  const urlParamStudyField =
    router.asPath
      .split('?')[1]
      ?.split('&')
      ?.find(param => param.includes('studyFields'))
      ?.split('=')[1]
      ?.split('%252B') || null

  console.log('urlParamStudyField: ', urlParamStudyField)

  const [appliedStudyFields, setAppliedStudyFields] = useState<
    TStudyFields | []
  >(
    (router.query?.studyField && studyFields?.length === 1 && studyFields) || []
  )
  const studyFieldsShowMaxDefault = 8
  const [studyFieldsShowMax, setStudyFieldsShowMax] = useState(
    (studyFieldsSearchValue && Infinity) || studyFieldsShowMaxDefault
  )

  console.log('appliedStudyFields: ', appliedStudyFields)

  const studyFieldControlBtnShowMax = studyFields &&
    studyFields?.length > studyFieldsShowMaxDefault &&
    studyFieldsShowMax < Infinity && (
      <button
        className={cn(stls.btnShowAll, stls.btnStudyFieldControl)}
        onClick={() => setStudyFieldsShowMax(Infinity)}>
        {translations.btnShowMoreVal}{' '}
        <IconPointerBottom
          classNames={[stls.IconPointerBottom]}
          color={colors.beta}
        />
      </button>
    )

  const studyFieldControlBtnSetDefault = appliedStudyFields?.length > 0 &&
    !router?.query?.studyField && (
      <button
        className={cn(
          stls.btnSetStudyFieldsToDefault,
          stls.btnStudyFieldControl
        )}
        onClick={() => {
          setAppliedStudyFields([])
          router.replace(
            {
              pathname: `${routesFront.programs}${
                (router.query?.category && `/${router.query?.category}`) || ''
              }`,
              query: undefined
            },
            undefined,
            { shallow: true }
          )
        }}>
        {translations.btnResetFilters}
      </button>
    )

  const studyFieldsControlBtns = (studyFieldsShowMax < Infinity ||
    appliedStudyFields?.length > 0) && (
    <div className={stls.studyFieldsBtns}>
      {studyFieldControlBtnShowMax}
      {studyFieldControlBtnSetDefault}
    </div>
  )

  const [useEffectFirstRun, setUseEffectFirstRun] = useState(true)
  useEffect(() => {
    // if (router.query?.studyField && studyFields?.length === 1) {
    //   setAppliedStudyFields(studyFields)
    // }

    const handleStudyFieldsURLQuery = () => {
      console.log('test')
      console.log('appliedStudyFields ', appliedStudyFields)
      if (!router.query?.studyField) {
        router.replace(
          {
            pathname: `${routesFront.programs}${
              (router.query?.category && `/${router.query?.category}`) || ''
            }`,
            query:
              (appliedStudyFields?.length !== 0 && {
                studyFields: encodeURIComponent(
                  appliedStudyFields.map(item => item.slug).join('+')
                )
              }) ||
              undefined
          },
          undefined,
          { shallow: true }
        )

        // setAppliedStudyFields(
        //   studyFields?.filter(
        //     studyField =>
        //       studyField?.slug && urlParamStudyField?.includes(studyField.slug)
        //   ) || []
        // )
      }
    }
    if (useEffectFirstRun) {
      console.log('TEST TEST TEST TEST TEST')
      handleStudyFieldsURLQuery()
    }

    // if (
    //   urlParamStudyField &&
    //   urlParamStudyField?.length !== 0
    // ) {
    //   setAppliedStudyFields(
    //     studyFields?.filter(
    //       studyField =>
    //         studyField.slug && urlParamStudyField?.includes(studyField.slug)
    //     ) || []
    //   )
    // }

    if (studyFieldsSearchValue) {
      setStudyFieldsShowMax(Infinity)
    } else {
      setStudyFieldsShowMax(studyFieldsShowMaxDefault)
    }
    setUseEffectFirstRun(true)
  }, [studyFieldsSearchValue, useEffectFirstRun, router.query?.studyField])

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.heading}>
          <h1 className={stls.title}>
            <span className={stls.laptopDesktop}>
              {translations.titleLaptopDesktop}
            </span>
            <span className={stls.phoneTablet}>
              {curCategory?.label || translations.allPrograms}
            </span>
          </h1>
          <p className={stls.programsCounter}>
            <span className={stls.tabletLaptopDesktop}>
              {translations.moreThan}{' '}
            </span>
            <span
              className={stls.highlight}
              title={`${
                Math.round((programs?.length || 100) / 10) * 10
              } программ`}>
              {Math.round((programs?.length || 100) / 10) * 10}
              <span className={stls.phone}>+</span>
            </span>{' '}
            <span className={stls.tabletLaptopDesktop}>
              {translations.programs}
            </span>
          </p>
        </div>
        <div className={cn(stls.underheading, stls.laptopDesktop)}>
          <GeneralSectionTitle classNames={[stls.GeneralSectionTitle]}>
            {curCategory?.label || translations.allPrograms}
          </GeneralSectionTitle>
          <ul className={stls.categories}>
            <li className={stls.categoryItem}>
              <Link href={routesFront.programs}>
                <a
                  className={cn(stls.categoryLink, {
                    [stls.isActive]: !curCategory
                  })}>
                  {translations.allPrograms}
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
              {(router?.query?.studyField && translations.singleStudyField) ||
                translations.allStudyFields}
            </h3>
            <ul className={stls.studyFields}>
              {studyFields
                ?.filter((studyField, idx) => idx < studyFieldsShowMax)
                ?.map((studyField, idx) => (
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
                        if (router?.query?.studyField) {
                          router.push(
                            (router.query.category &&
                              `${routesFront.programs}/${router.query.category}`) ||
                              routesFront.programs
                          )
                          return
                        }

                        if (
                          appliedStudyFields.some(
                            appliedStudyField =>
                              appliedStudyField?.slug === studyField?.slug
                          )
                        ) {
                          setAppliedStudyFields(
                            appliedStudyFields.filter(
                              appliedStudyField =>
                                appliedStudyField?.slug !== studyField?.slug
                            )
                          )
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
            {studyFieldsControlBtns}
          </div>
          <div className={stls.right}>
            <div className={stls.searchContainer}>
              <input
                className={stls.searchInput}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder={translations.searchPlaceholder}
                title={searchValue || translations.searchPlaceholder}
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
                    <span className={stls.btnText}>
                      {curCategory?.label || translations.allPrograms}
                    </span>
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
                    <h3
                      className={cn(
                        stls.GeneralPopupTitle,
                        stls.GeneralPopupTitleChooseProgram
                      )}>
                      {translations.chooseProgram}
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
                                {translations.allPrograms}
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
                    <span className={stls.btnText}>
                      {appliedStudyFields.length > 0
                        ? appliedStudyFields.map((appliedStudyField, idx) => (
                            <span
                              key={`appliedStudyField-${appliedStudyField.title}-${idx}`}>
                              {idx !== 0 && ', '}
                              {appliedStudyField.title}
                            </span>
                          ))
                        : (router?.query?.studyField &&
                            translations.singleStudyField) ||
                          translations.allStudyFields}
                    </span>
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
                      {translations.chooseStudyField}
                    </h3>
                    <div
                      className={stls.GeneralPopupStudyFieldsSearchContainer}>
                      <input
                        className={stls.GeneralPopupStudyFieldsSearch}
                        onChange={event =>
                          setStudyFieldsSearchValue(event.target.value)
                        }
                        value={studyFieldsSearchValue}
                        placeholder={translations.searchStudyFieldPlaceholder}
                      />
                      <div className={stls.iconSearchContainer}>
                        <IconSearch classNames={[stls.IconSearch]} />
                      </div>
                    </div>
                    {studyFieldControlBtnSetDefault}
                    <ul className={stls.list}>
                      {studyFields
                        ?.filter((studyField, idx) => idx < studyFieldsShowMax)
                        ?.filter(studyField =>
                          studyFieldsSearchValue
                            ? studyField.title
                                ?.toLowerCase()
                                .includes(studyFieldsSearchValue.toLowerCase())
                            : true
                        )
                        ?.map((studyField, idx) => (
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
                                if (router?.query?.studyField) {
                                  router.push(
                                    (router.query.category &&
                                      `${routesFront.programs}/${router.query.category}`) ||
                                      routesFront.programs
                                  )
                                  return
                                }

                                if (
                                  appliedStudyFields.some(
                                    appliedStudyField =>
                                      appliedStudyField?.slug ===
                                      studyField?.slug
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
                                      appliedStudyField?.slug ===
                                      studyField?.slug
                                  )
                                })}>
                                <IconCheckAlt
                                  color={colors.upsilon}
                                  classNames={[stls.IconCheckAlt]}
                                />
                              </div>
                              <span className={stls.studyFieldTitle}>
                                {studyFieldsSearchValue && studyField.title ? (
                                  <Highlighter
                                    highlightClassName={stls.highligher}
                                    searchWords={[studyFieldsSearchValue]}
                                    autoEscape={true}
                                    textToHighlight={studyField?.title}
                                  />
                                ) : (
                                  studyField.title
                                )}
                              </span>
                            </a>
                          </li>
                        ))}
                    </ul>
                    {studyFieldControlBtnShowMax}
                    <BtnAlpha
                      variant='beta'
                      onClick={close}
                      classNames={[stls.BtnAlphaApplyStudyFields]}>
                      {translations.apply}
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
