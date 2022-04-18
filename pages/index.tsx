import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { GetStaticProps } from 'next'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { pros } from '@/data/index'
import { routesFront, companyName, defaultSeoDesc } from '@/config/index'
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
  }, [categories, programs, questions])

  const seoParams = {
    title: `${companyName} | ${defaultSeoDesc}`,
    desc: truncate(pros.join('. '), 120),
    canonical: routesFront.defaultRoot
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routesFront.defaultRoot}${routesFront.assetsImgsIconsManifestIcon512}`,
              width: 512,
              height: 512,
              alt: companyName,
              type: 'image/png'
            }
          ],
          site_name: companyName
        }}
      />
      <SectionHero />
      <SectionOurPrograms />
      <SectionLeastDocuments />
      <SectionEnterWithoutExam />
      <SectionHowTrainingGoes />
      <SectionAboutUniversity />
      <SectionYourFutureDiploma />
      <SectionFAQ />
      <SectionUIFormAlpha />
    </>
  )
}

export default PageHome

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.home, context })
