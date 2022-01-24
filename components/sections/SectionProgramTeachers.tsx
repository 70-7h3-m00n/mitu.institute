import stls from '@/styles/components/sections/SectionProgramTeachers.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionProgramTeachersProps = TypeClassNames & {
  title?: string
}

const SectionProgramTeachers = ({
  classNames,
  title
}: TypeSectionProgramTeachersProps) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Преподаватели</GeneralSectionTitle>
      </Wrapper>
    </section>
  )
}

export default SectionProgramTeachers
