import stls from '@/styles/pages/Index.module.sass'
import type { NextPage } from 'next'
import {
  SectionHero,
  SectionLeastDocuments,
  SectionEnterWithoutExam
} from '@/components/sections'

const Home: NextPage = () => {
  return (
    <>
      <SectionHero />
      <SectionLeastDocuments />
      <SectionEnterWithoutExam />
    </>
  )
}

export default Home
