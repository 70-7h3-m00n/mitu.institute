import stls from '@/styles/pages/PagePromo.module.sass'
import type { NextPage } from 'next'
import { TypePagePromoPrograms } from '@/types/index'
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

type TypePagePromoProps = TypePagePromoPrograms & {
  // readonly land?: unknown
  readonly categories?: {
    label?: string
    type?: string
  }
}

const PagePromo: NextPage<TypePagePromoProps> = ({ programs, categories }) => {
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
