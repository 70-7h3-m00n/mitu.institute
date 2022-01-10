import stls from '@/styles/pages/Index.module.sass'
import type { NextPage } from 'next'
import { SectionHero, TrainingFormat } from '@/components/sections'

const Home: NextPage = () => {
  return (
    <>
      <SectionHero />
      <TrainingFormat/>
    </>
  )
}

export default Home
