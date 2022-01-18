import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import {
  SectionHero,
  SectionLeastDocuments,
  SectionEnterWithoutExam,
  SectionHowTrainingGoes,
  SectionAboutUniversity,
  SectionTrainingFormat
} from '@/components/sections'

const PageHome: NextPage = () => {
  return (
    <>
      <SectionHero />
      <SectionLeastDocuments />
      <SectionEnterWithoutExam />
      <SectionHowTrainingGoes />
      <SectionAboutUniversity />
      <SectionTrainingFormat />
    </>
  )
}

export default PageHome
