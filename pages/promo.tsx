import stls from '@/styles/pages/PagePromo.module.sass'
import type { NextPage } from 'next'
import { TypePagePromoStaticProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/helpers/index'
import {
  ContextCategoriesContext,
  ContextCategoryContext,
  ContextStudyFieldContext,
  ContextProgramContext
} from '@/context/index'
import {
  SectionHero,
  SectionOurProgramsPromo,
  SectionLeastDocuments,
  SectionEnterWithoutExam,
  SectionHowTrainingGoes,
  SectionAboutUniversity,
  SectionFAQ,
  SectionYourFutureDiploma,
  SectionUIFormAlpha
} from '@/components/sections'

const PagePromo: NextPage<TypePagePromoStaticProps> = ({
  programs,
  categories
}) => {
  const { setCategories } = useContext(ContextCategoriesContext)
  const { setCategory } = useContext(ContextCategoryContext)
  const { setStudyField } = useContext(ContextStudyFieldContext)
  const { setProgram } = useContext(ContextProgramContext)

  useEffect(() => {
    setCategories({ payload: categories || null })
    setCategory({ payload: categories?.[0].type || null })
    setStudyField({ payload: null })
    setProgram({ payload: null })
  }, [categories])

  return (
    <>
      <SectionHero />
      <SectionOurProgramsPromo programs={programs} />
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

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: routesFront.promo })
