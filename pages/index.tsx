import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import {
  SectionHero,
  SectionLeastDocuments,
  SectionEnterWithoutExam
} from '@/components/sections'

const PageHome: NextPage = () => {
  return (
    <>
      <SectionHero />
      <SectionLeastDocuments />
      <SectionEnterWithoutExam />
    </>
  )
}

export default PageHome
