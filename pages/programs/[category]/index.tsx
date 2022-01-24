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

const PageProgramsCategory = ({
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
    setStudyField({ payload: null })
    setProgram({ payload: null })
  }, [gspContextParamsCategory])

  return (
    <>
      <Wrapper>
        Программы{' '}
        {categories?.map(
          category =>
            category.slug === gspContextParamsCategory && category.label
        )}
      </Wrapper>
    </>
  )
}

export default PageProgramsCategory

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routesFront.programs })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.programs, context })
