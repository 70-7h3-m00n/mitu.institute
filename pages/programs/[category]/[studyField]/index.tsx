import stls from '@/styles/pages/PageProgramsCategory.module.sass'
import type { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { routesFront } from '@/config/index'
import { handleGetStaticProps, handleGetStaticPaths } from '@/lib/index'
import {
  ContextCategoriesContext,
  ContextStudyFieldContext,
  ContextProgramsContext,
  ContextProgramContext
} from '@/context/index'
import { PagesPagePrograms } from '@/components/pages'

const PageProgramsCategoryStudyField: NextPage<TypePageProgramsProps> = ({
  categories,
  studyFields,
  programs,
  gspContextParamsCategory,
  gspContextParamsStudyField
}) => {
  const { setCategories } = useContext(ContextCategoriesContext)
  const { setStudyField } = useContext(ContextStudyFieldContext)
  const { setPrograms } = useContext(ContextProgramsContext)
  const { setProgram } = useContext(ContextProgramContext)

  useEffect(() => {
    setCategories({
      categories, curCategorySlug: gspContextParamsCategory || null
    })
    setStudyField(gspContextParamsStudyField || null)
    setPrograms(programs || null)
    setProgram(null || null)
  }, [
    categories,
    programs,
    gspContextParamsCategory,
    gspContextParamsStudyField
  ])

  return (
    <>
      <PagesPagePrograms studyFields={studyFields} />
    </>
  )
}

export default PageProgramsCategoryStudyField

export const getStaticPaths: GetStaticPaths = async ({
  locales,
  defaultLocale
}) =>
  await handleGetStaticPaths({
    page: routesFront.programsCategoryStudyField,
    locales,
    defaultLocale
  })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.programs, context })
