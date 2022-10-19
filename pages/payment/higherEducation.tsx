import type { NextPage } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { GetStaticProps } from 'next'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { PagesPagePayment } from '@/components/pages'

const PagePaymentHigherEducation: NextPage<TypePageHomeProps> = ({
  categories,
  programs,
  questions
}) => {
  return (
    <>
      <PagesPagePayment
        categories={categories}
        programs={programs}
        questions={questions}
      />
    </>
  )
}

export default PagePaymentHigherEducation

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.home, context })
