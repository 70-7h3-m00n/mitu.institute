import stls from '@/styles/pages/PagePrograms.module.sass'
import { GetStaticProps } from 'next'
import { TypePageProgramsStaticProps, TypeProgramCategory } from '@/types/index'
import { useContext, useEffect } from 'react'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/helpers/index'
import {
  ContextCategoriesContext,
  ContextCategoryContext,
  ContextStudyFieldContext,
  ContextProgramContext
} from '@/context/index'
import { Wrapper } from '@/components/layout'

const PagePrograms = ({
  categories,
  studyFields,
  programs,
  gspContextParamsCategory,
  gspContextParamsStudyField
}: TypePageProgramsStaticProps) => {
  const { setCategories } = useContext(ContextCategoriesContext)
  const { setCategory } = useContext(ContextCategoryContext)
  const { setStudyField } = useContext(ContextStudyFieldContext)
  const { setProgram } = useContext(ContextProgramContext)

  useEffect(() => {
    setCategories({ payload: categories || null })
    setCategory({ payload: categories?.[0] || null })
    setStudyField({ payload: null })
    setProgram({ payload: null })
  }, [])

  return (
    <>
      <Wrapper>Программы</Wrapper>
    </>
  )
}

export default PagePrograms

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.programs, context })
