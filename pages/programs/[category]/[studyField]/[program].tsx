import stls from '@/styles/pages/PageProgramsCategory.module.sass'
import type { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TypePageProgramProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { routesFront, mituinstitute } from '@/config/index'
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
  SectionHowTrainingGoes,
  SectionLeastDocuments,
  SectionProgramWhatWillYouLearn,
  SectionProgramHowProcessGoes,
  SectionProgramContents,
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

  useEffect(() => {
    setCategories({
      payload: { categories, curCategorySlug: gspContextParamsCategory }
    })
    setStudyField({ payload: gspContextParamsStudyField })
    setProgram({ payload: program || null })
  }, [gspContextParamsCategory, gspContextParamsStudyField, program])

  return (
    <>
      {programContext && (
        <>
          <SectionProgramHero />
          <SectionProgramForWhom />
          {curCategory?.type !== 'additional' && <SectionEnterWithoutExam />}
          <SectionHowTrainingGoes />
          <SectionLeastDocuments />
          <SectionProgramWhatWillYouLearn />
          {/* <SectionProgramHowProcessGoes /> */}
          <SectionProgramContents />
          {mituinstitute && <SectionStudyingWithUsIs />}
          <SectionYourFutureDiploma atPageProgram />
          {mituinstitute && <SectionCheckLicense />}
          {mituinstitute && <SectionWhyUs />}
          <SectionStartWithDiscount />
          {/* <SectionProgramJobTitles /> */}
          <SectionProgramJobTitlesWithoutPictures />
          <SectionUIFormAlpha title='Получить бесплатную консультацию' />
          <SectionProgramStudyCost />
          {mituinstitute &&
            curCategory?.type !== 'bachelor' &&
            curCategory?.type !== 'master' && (
              <>
                <SectionProgramTeachers />
              </>
            )}
          <SectionProgramQna />
        </>
      )}
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
