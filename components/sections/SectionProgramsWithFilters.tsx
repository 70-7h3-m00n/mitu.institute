import stls from '@/styles/components/sections/SectionProgramsWithFilters.module.sass'
import {
  TypeBtnAlphaVariant,
  TypeClassNames,
  TypeLibProgramsStudyFields,
  TypePagePromoProps
} from '@/types/index'
import { MouseEventHandler, useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesFront, selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import {
  ContextCategoriesContext,
  ContextStudyFieldContext,
  ContextProgramsContext
} from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { CardsProgram } from '@/components/cards'
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
  const { categories, curCategory, setCategories } = useContext(
    ContextCategoriesContext
  )
  const { studyField: studyFieldContext } = useContext(ContextStudyFieldContext)
  const { programs } = useContext(ContextProgramsContext)

  const btnsCategories = categories?.map(category => ({
    variantType: category?.type,
    label: category?.label,
    href: category?.slug
  }))

  console.log(studyFieldContext)
  console.log(studyFields)
  // const studyFields = programs?.map(program => program.study_field)

  // console.log(studyFields)

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.heading}>
          <h1 className={stls.title}>Программы</h1>
          <p className={stls.programsCounter}>
            Более{' '}
            <span className={stls.highlight}>
              {Math.round((programs?.length || 100) / 10) * 10}
            </span>{' '}
            программ
          </p>
        </div>
        <div className={stls.searchContainer}>
          <input
            className={stls.search}
            placeholder='Введите название программы'
          />
          <div className={stls.iconSearchContainer}>
            <IconSearch classNames={[stls.IconSearch]} />
          </div>
        </div>
        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.filters}>
              <div className={stls.filter}>
                <h3 className={stls.filterTitle}>Программы</h3>
                <div className={stls.btnsCategories}>
                  {btnsCategories?.map((btn, idx) => (
                    <BtnAlpha
                      key={(btn.label || 'btn') + idx}
                      tag={'Link'}
                      href={`${routesFront.programs}/${btn.href}`}
                      scroll={false}
                      variant={
                        curCategory?.type === btn.variantType ? 'beta' : 'eta'
                      }
                      classNames={[stls.btnCategory]}>
                      {btn.label}
                    </BtnAlpha>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={stls.right}>
            <GeneralSectionTitle classNames={[stls.GeneralSectionTitle]}>
              {curCategory?.label}
            </GeneralSectionTitle>
            <ul className={stls.studyFields}>
              {studyFields?.map((studyField, idx) => (
                <li
                  key={`${
                    studyField?.title ||
                    'SectionProgramsWithFilters__studyField'
                  }-${idx}`}
                  className={stls.studyFieldItem}>
                  <BtnAlpha
                    key={(studyField?.title || 'btn') + idx}
                    tag={'Link'}
                    href={`${routesFront.programs}/${curCategory?.slug}/${studyField?.slug}`}
                    scroll={false}
                    variant={
                      studyFieldContext === studyField?.slug ? 'beta' : 'eta'
                    }
                    classNames={[stls.btnStudyField]}>
                    {studyField?.title}
                  </BtnAlpha>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={stls.content2}>
          <CardsProgram />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionProgramsWithFilters
