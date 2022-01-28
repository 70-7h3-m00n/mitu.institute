import stls from '@/styles/components/pages/PagesPagePrograms.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { SectionOurPrograms } from '@/components/sections'
import { SectionUIFormAlpha } from '@/components/sections'

type TypeSectionAboutUniversityProps = {}

const SectionAboutUniversity = () => {
  return (
    <>
      <SectionOurPrograms
        classNames={[stls.SectionOurPrograms, stls.ourPrograms]}
        atPrograms
      />
      <SectionUIFormAlpha />
    </>
  )
}

export default SectionAboutUniversity
