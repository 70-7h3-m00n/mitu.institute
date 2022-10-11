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

const PageProgramsCategory: NextPage<TypePageProgramsProps> = ({
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
    setStudyField(null)
    setPrograms(programs || null)
    setProgram(null)
  }, [categories, programs, gspContextParamsCategory])

  return (
    <>
      <PagesPagePrograms studyFields={studyFields} />
    </>
  )
}

export default PageProgramsCategory

export const getStaticPaths: GetStaticPaths = async ({
  locales,
  defaultLocale
}) =>
  await handleGetStaticPaths({
    page: routesFront.programs,
    locales,
    defaultLocale
  })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.programs, context })
