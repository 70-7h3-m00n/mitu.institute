import stls from '@/styles/pages/PagePrograms.module.sass'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import {
  ContextCategoriesContext,
  ContextStudyFieldContext,
  ContextProgramsContext,
  ContextProgramContext
} from '@/context/index'
import { PagesPagePrograms } from '@/components/pages'

const PagePrograms: NextPage<TypePageProgramsProps> = ({
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
      categories, curCategorySlug: categories?.[0]?.slug || null
    })
    setPrograms(programs || null)
    setStudyField(null)
    setProgram(null)
  }, [categories, programs])

  return (
    <>
      <PagesPagePrograms studyFields={studyFields} />
    </>
  )
}

export default PagePrograms

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.programs, context })
