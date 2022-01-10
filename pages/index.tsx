import stls from '@/styles/pages/Index.module.sass'
import type { NextPage } from 'next'
import { AboutUniversity, SectionHero } from '@/components/sections'

const Home: NextPage = () => {
  return (
    <>
      <SectionHero />
      <AboutUniversity/>
    </>
  )
}

export default Home
