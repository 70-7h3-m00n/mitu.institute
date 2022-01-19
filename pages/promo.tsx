import stls from '@/styles/pages/PagePromo.module.sass'
import type { NextPage } from 'next'
import { TypePagePromoProps } from '@/types/index'
// import { routesFront } from '@/config/index'
// import { handleGetStaticProps } from '@/helpers/index'
import {
  SectionHero,
  SectionOurPrograms,
  SectionLeastDocuments,
  SectionEnterWithoutExam,
  SectionHowTrainingGoes,
  SectionAboutUniversity,
  SectionTrainingFormat,
  SectionFAQ,
  SectionYourFutureDiploma,
  SectionUIFormAlpha
} from '@/components/sections'

const PagePromo: NextPage<TypePagePromoProps> = () => {
  return (
    <>
      <SectionHero />
      <SectionOurPrograms />
      <SectionLeastDocuments />
      <SectionEnterWithoutExam />
      <SectionHowTrainingGoes />
      <SectionAboutUniversity />
      <SectionTrainingFormat />
      <SectionFAQ />
      <SectionYourFutureDiploma />
      <SectionUIFormAlpha />
    </>
  )
}

export default PagePromo

// export const getStaticProps = async () =>
//   await handleGetStaticProps({ page: routesFront.promo })
