import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { GetStaticProps } from 'next'
import { useContext, useEffect } from 'react'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import {
  ContextCategoriesContext,
  ContextStudyFieldContext,
  ContextProgramsContext,
  ContextQuestionsContext,
  ContextProgramContext
} from '@/context/index'
import {
  SectionHero,
  SectionOurPrograms,
  SectionLeastDocuments,
  SectionEnterWithoutExam,
  SectionHowTrainingGoes,
  SectionAboutUniversity,
  SectionFAQ,
  SectionYourFutureDiploma,
  SectionUIFormAlpha
} from '@/components/sections'

const PageHome: NextPage<TypePageHomeProps> = ({
  categories,
  programs,
  questions
}) => {
  const { setCategories } = useContext(ContextCategoriesContext)
  const { setStudyField } = useContext(ContextStudyFieldContext)
  const { setPrograms } = useContext(ContextProgramsContext)
  const { setQuestions } = useContext(ContextQuestionsContext)
  const { setProgram } = useContext(ContextProgramContext)

  useEffect(() => {
    setCategories({
      payload: { categories, curCategorySlug: categories?.[0]?.slug || null }
    })
    setStudyField({ payload: null })
    setPrograms({ payload: programs })
    setQuestions({ payload: questions })
    setProgram({ payload: null })
  }, [categories, programs])

  return (
    <>
      <SectionHero />
      <SectionOurPrograms />
      <SectionLeastDocuments />
      <SectionEnterWithoutExam />
      <SectionHowTrainingGoes />
      <SectionAboutUniversity />
      <SectionFAQ />
      <SectionYourFutureDiploma />
      <SectionUIFormAlpha />
    </>
  )
}

export default PageHome

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.home, context })
