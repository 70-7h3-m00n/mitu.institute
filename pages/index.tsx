import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import {
  SectionHero,
  SectionOurProgramsPromo,
  SectionLeastDocuments,
  SectionEnterWithoutExam,
  SectionHowTrainingGoes,
  SectionAboutUniversity,
  SectionFAQ,
  SectionYourFutureDiploma,
  SectionUIFormAlpha,
  SectionWhoIsThisProgram
} from '@/components/sections'

const PageHome: NextPage = () => {
  return (
    <>
      <SectionHero />
      <SectionOurProgramsPromo />
      <SectionLeastDocuments />
      <SectionEnterWithoutExam />
      <SectionHowTrainingGoes />
      <SectionAboutUniversity />
      <SectionFAQ />
      <SectionYourFutureDiploma />
      <SectionUIFormAlpha />
      <SectionWhoIsThisProgram/>
    </>
  )
}

export default PageHome
