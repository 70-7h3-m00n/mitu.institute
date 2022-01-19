import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
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
  SectionUIFormAlpha,
  SectionWhoIsThisProgram
} from '@/components/sections'

const PageHome: NextPage = () => {
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
      <SectionWhoIsThisProgram/>
    </>
  )
}

export default PageHome
