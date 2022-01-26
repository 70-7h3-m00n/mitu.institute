import stls from '@/styles/pages/PageProgramsCategory.module.sass'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { routesFront } from '@/config/index'
import { handleGetStaticProps, handleGetStaticPaths } from '@/lib/index'
import {
  ContextCategoriesContext,
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
}: TypePageProgramsProps) => {
  const { setCategories } = useContext(ContextCategoriesContext)
  const { setStudyField } = useContext(ContextStudyFieldContext)
  const { setProgram } = useContext(ContextProgramContext)

  useEffect(() => {
    setCategories({
      payload: { categories, curCategorySlug: gspContextParamsCategory }
    })
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
