import stls from '@/styles/pages/PagePromo.module.sass'
import type { NextPage } from 'next'
import { TypePagePromoStaticProps } from '@/types/index'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/helpers/index'
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
