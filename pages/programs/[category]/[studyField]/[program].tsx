import stls from '@/styles/pages/PageProgramsCategory.module.sass'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TypePageProgramsStaticProps } from '@/types/index'
import { routesFront } from '@/config/index'
import { handleGetStaticProps, handleGetStaticPaths } from '@/helpers/index'
import { Wrapper } from '@/components/layout'

const PageProgramsCategoryStudyFieldProgram = ({
  categories,
  studyFields,
  programs
}: TypePageProgramsStaticProps) => {
  return (
    <>
      <Wrapper>Программа</Wrapper>
    </>
  )
}

export default PageProgramsCategoryStudyFieldProgram

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routesFront.programs })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.programs, context })
