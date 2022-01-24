import stls from '@/styles/pages/PageProgramsCategory.module.sass'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TypePageProgramStaticProps } from '@/types/index'
import { routesFront } from '@/config/index'
import { handleGetStaticProps, handleGetStaticPaths } from '@/helpers/index'
import { Wrapper } from '@/components/layout'

const PageProgramsCategoryStudyFieldProgram = ({
  categories,
  programs,
  gspContextParamsCategory,
  gspContextParamsStudyField,
  gspContextParamsProgram
}: TypePageProgramStaticProps) => {
  const program = programs?.[0]
  console.log(program)
  return (
    <>
      <Wrapper>Программа</Wrapper>
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
