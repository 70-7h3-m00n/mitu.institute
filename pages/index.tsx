import stls from '@/styles/pages/Index.module.sass'
import type { NextPage } from 'next'
import { SectionHero } from '@/components/sections'
import ProgramWithoutExam from '@/components/sections/ProgramWithoutExam'

const Home: NextPage = () => {
  return (
    <>
      <SectionHero />
      <ProgramWithoutExam/>
    </>
  )
}

export default Home
