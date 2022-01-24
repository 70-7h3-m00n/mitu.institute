import stls from '@/styles/pages/PageProgramsCategory.module.sass'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TypePageProgramStaticProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { routesFront } from '@/config/index'
import { handleGetStaticProps, handleGetStaticPaths } from '@/helpers/index'
import {
  ContextCategoryContext,
  ContextStudyFieldContext,
  ContextProgramContext
} from '@/context/index'
import { Wrapper } from '@/components/layout'
import {
  SectionProgramHero,
  SectionProgramForWhom,
  SectionProgramWhatWillYouLearn,
  SectionProgramHowProcessGoes,
  SectionProgramContents,
  SectionProgramYourDiploma,
  SectionProgramJobTitles,
  SectionUIFormAlpha,
  SectionProgramTeachers,
  SectionStartWithDiscount,
  SectionProgramStudyCost,
  SectionProgramQna
} from '@/components/sections'

const PageProgramsCategoryStudyFieldProgram = ({
  categories,
  programs,
  gspContextParamsCategory,
  gspContextParamsStudyField,
  gspContextParamsProgram
}: TypePageProgramStaticProps) => {
  const { setCategory } = useContext(ContextCategoryContext)
  const { setStudyField } = useContext(ContextStudyFieldContext)
  const { setProgram } = useContext(ContextProgramContext)

  const program = programs?.[0] || null

  useEffect(() => {
    setCategory({ payload: gspContextParamsCategory })
    setStudyField({ payload: gspContextParamsStudyField })
    setProgram({ payload: program })
  }, [gspContextParamsCategory, gspContextParamsStudyField, program])

  return (
    <>
      <SectionProgramHero />
      <SectionProgramForWhom />
      <SectionProgramWhatWillYouLearn />
      <SectionProgramHowProcessGoes />
      <SectionProgramContents />
      <SectionProgramYourDiploma />
      <SectionProgramJobTitles />
      <SectionUIFormAlpha />
      <SectionProgramTeachers />
      <SectionStartWithDiscount />
      <SectionProgramStudyCost />
      <SectionProgramQna />
    </>
  )
}

export default PageProgramsCategoryStudyFieldProgram

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({
    page: routesFront.programsCategoryStudyFieldProgram
  })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.programsCategoryStudyFieldProgram,
    context
  })
