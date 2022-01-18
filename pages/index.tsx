import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import {
  SectionHero,
  SectionLeastDocuments,
  SectionEnterWithoutExam,
  SectionHowTrainingGoes
} from '@/components/sections'

const PageHome: NextPage = () => {
  return (
    <>
      <SectionHero />
      <SectionLeastDocuments />
      <SectionEnterWithoutExam />
      <SectionHowTrainingGoes />
    </>
  )
}

export default PageHome
