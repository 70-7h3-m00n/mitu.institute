import stls from '@/styles/pages/PageProgramsCategory.module.sass'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { routesFront } from '@/config/index'
import { handleGetStaticProps, handleGetStaticPaths } from '@/lib/index'
import {
  ContextCategoriesContext,
  ContextStudyFieldContext,
  ContextProgramContext
} from '@/context/index'
import { Wrapper } from '@/components/layout'

const PageProgramsCategoryStudyField = ({
  categories,
  studyFields,
  programs,
  gspContextParamsCategory,
  gspContextParamsStudyField
}: TypePageProgramsProps) => {
  const { setCategories } = useContext(ContextCategoriesContext)
  const { setStudyField } = useContext(ContextStudyFieldContext)
  const { setProgram } = useContext(ContextProgramContext)

  useEffect(() => {
    setCategories({
      payload: { categories, curCategorySlug: gspContextParamsCategory }
    })
    setStudyField({ payload: gspContextParamsStudyField })
    setProgram({ payload: null })
  }, [gspContextParamsCategory, gspContextParamsStudyField])

  return (
    <>
      <Wrapper>Программы и направления</Wrapper>
    </>
  )
}

export default PageProgramsCategoryStudyField

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routesFront.programsCategoryStudyField })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.programs, context })
