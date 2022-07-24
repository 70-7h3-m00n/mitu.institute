import stls from '@/styles/pages/PageProgramsCategory.module.sass'
import type { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TypePageProgramProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo, CourseJsonLd } from 'next-seo'
import truncate from 'truncate'
import { routesFront, company, mituinstitute } from '@/config/index'
import { handleGetStaticProps, handleGetStaticPaths } from '@/lib/index'
import {
  ContextCategoriesContext,
  ContextStudyFieldContext,
  ContextProgramContext
} from '@/context/index'
import {
  SectionProgramHero,
  SectionProgramForWhom,
  SectionEnterWithoutExam,
  SectionCorporateProgram,
  SectionHowTrainingGoes,
  SectionLeastDocuments,
  SectionProgramWhatWillYouLearn,
  SectionProgramHowProcessGoes,
  SectionProgramContents,
  SectionAboutStudying,
  SectionFullProgram,
  SectionStudyingWithUsIs,
  SectionYourFutureDiploma,
  SectionCheckLicense,
  SectionWhyUs,
  SectionProgramJobTitles,
  SectionProgramJobTitlesWithoutPictures,
  SectionUIFormAlpha,
  SectionProgramTeachers,
  SectionStartWithDiscount,
  SectionProgramStudyCost,
  SectionProgramQna
} from '@/components/sections'

const PageProgramsCategoryStudyFieldProgram: NextPage<TypePageProgramProps> = ({
  categories,
  program,
  gspContextParamsCategory,
  gspContextParamsStudyField,
  gspContextParamsProgram
}) => {
  const { setCategories, curCategory } = useContext(ContextCategoriesContext)
  const { setStudyField } = useContext(ContextStudyFieldContext)
  const { program: programContext, setProgram } = useContext(
    ContextProgramContext
  )
  const atAdditional =
    program?.category?.type === 'additional' ||
    curCategory?.type === 'additional'

  useEffect(() => {
    setCategories({
      payload: { categories, curCategorySlug: gspContextParamsCategory }
    })
    setStudyField({ payload: gspContextParamsStudyField })
    setProgram({ payload: program || null })
  }, [
    categories,
    program,
    gspContextParamsCategory,
    gspContextParamsStudyField
  ])

  const seoParams = {
    title: `${program?.title} | ${program?.category?.label} | ${company.name}`,
    programTitle: program?.title || 'Программа',
    desc: truncate(
      program?.description ||
        program?.shortContents?.reduce(
          (acc, cur) => acc + cur?.title + '. ',
          ''
        ) ||
        company.tagline,
      120
    ),
    canonical: `${routesFront.defaultRoot}${routesFront.programs}/${program?.category?.slug}/${program?.study_field?.slug}/${program?.slug}`
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
              url: `${routesFront.defaultRoot}${routesFront.assetsImgsIconsManifestIconBg512}`,
              width: 512,
              height: 512,
              alt: company.name,
              type: 'image/png'
            }
          ],
          site_name: company.name
        }}
      />
      <CourseJsonLd
        courseName={seoParams.programTitle}
        description={seoParams.desc}
        providerName={company.name}
        providerUrl={seoParams.canonical}
      />
      {programContext && (
        <>
          <SectionProgramHero />
          <SectionProgramForWhom />
          {!atAdditional && <SectionEnterWithoutExam />}
          {atAdditional && <SectionCorporateProgram />}
          <SectionHowTrainingGoes />
          {!atAdditional && <SectionLeastDocuments />}
          <SectionProgramWhatWillYouLearn />
          {/* <SectionProgramHowProcessGoes /> */}
          <SectionProgramContents />
          {atAdditional && <SectionAboutStudying />}
          {atAdditional && <SectionFullProgram />}
          {mituinstitute && !atAdditional && <SectionStudyingWithUsIs />}
          <SectionYourFutureDiploma atPageProgram />
          {mituinstitute && <SectionCheckLicense />}
          {mituinstitute && <SectionWhyUs />}
          {!atAdditional && <SectionStartWithDiscount />}
          {/* <SectionProgramJobTitles /> */}
          {mituinstitute &&
            curCategory?.type !== 'bachelor' &&
            curCategory?.type !== 'master' && (
              <>
                <SectionProgramTeachers />
              </>
            )}
          {atAdditional && <SectionStartWithDiscount />}
          <SectionProgramJobTitlesWithoutPictures />
          {!atAdditional && (
            <SectionUIFormAlpha title='Получить бесплатную консультацию' />
          )}
          <SectionProgramStudyCost />
          <SectionProgramQna />
        </>
      )}
    </>
  )
}

export default PageProgramsCategoryStudyFieldProgram

export const getStaticPaths: GetStaticPaths = async ({
  locales,
  defaultLocale
}) =>
  await handleGetStaticPaths({
    page: routesFront.programsCategoryStudyFieldProgram,
    locales,
    defaultLocale
  })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    page: routesFront.programsCategoryStudyFieldProgram,
    context
  })
