import stls from '@/styles/pages/Index.module.sass'
import type { NextPage } from 'next'
import { HowTrainingGoing, SectionHero } from '@/components/sections'

const Home: NextPage = () => {
  return (
    <>
      <SectionHero />
      <HowTrainingGoing/>
    </>
  )
}

export default Home
