import stls from '@/styles/pages/PagePromo.module.sass'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePagePromoProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import {
  ContextCategoriesContext,
  ContextStudyFieldContext,
  ContextProgramsContext,
  ContextProgramContext,
  ContextQuestionsContext
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

const PagePromo: NextPage<TypePagePromoProps> = ({
  programs,
  categories,
  questions
}) => {
  const { setCategories } = useContext(ContextCategoriesContext)
  const { setStudyField } = useContext(ContextStudyFieldContext)
  const { setPrograms } = useContext(ContextProgramsContext)
  const { setQuestions } = useContext(ContextQuestionsContext)
  const { setProgram } = useContext(ContextProgramContext)

  useEffect(() => {
    setCategories({
      payload: { categories, curCategorySlug: categories?.[0].slug || null }
    })
    setStudyField({ payload: null })
    setPrograms({ payload: programs || null })
    setQuestions({ payload: questions || null })
    setProgram({ payload: null })
  }, [categories])

  return (
    <>
      <SectionHero />
      <SectionOurPrograms promo />
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

export default PagePromo

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routesFront.promo })
