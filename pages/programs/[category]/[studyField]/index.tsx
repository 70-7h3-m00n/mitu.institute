import stls from '@/styles/pages/PageProgramsCategory.module.sass'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TypePageProgramsStaticProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { routesFront } from '@/config/index'
import { handleGetStaticProps, handleGetStaticPaths } from '@/helpers/index'
import {
  ContextCategoryContext,
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
}: TypePageProgramsStaticProps) => {
  const { setCategory } = useContext(ContextCategoryContext)
  const { setStudyField } = useContext(ContextStudyFieldContext)
  const { setProgram } = useContext(ContextProgramContext)

  useEffect(() => {
    setCategory({ payload: gspContextParamsCategory })
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
