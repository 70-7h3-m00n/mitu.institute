import stls from '@/styles/components/pages/PagesPagePrograms.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { SectionOurPrograms } from '@/components/sections'

type TypeSectionAboutUniversityProps = TypeClassNames

const SectionAboutUniversity = ({
  classNames
}: TypeSectionAboutUniversityProps) => {
  return (
    <>
      <SectionOurPrograms classNames={[stls.ourPrograms]} atPrograms />
    </>
  )
}

export default SectionAboutUniversity
