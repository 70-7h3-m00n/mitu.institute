import stls from '@/styles/pages/PagePrograms.module.sass'
import { GetStaticProps } from 'next'
import { TypePageProgramsStaticProps } from '@/types/index'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/helpers/index'
import { Wrapper } from '@/components/layout'

const PagePrograms = ({
  categories,
  studyFields,
  programs
}: TypePageProgramsStaticProps) => {
  return (
    <>
      <Wrapper>Программы</Wrapper>
    </>
  )
}

export default PagePrograms

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.programs, context })
