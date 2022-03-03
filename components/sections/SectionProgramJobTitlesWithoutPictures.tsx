import stls from '@/styles/components/sections/SectionProgramJobTitlesWithoutPictures.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import {
  addSpacesToNumber,
  getClassNames,
  getImageHeight
} from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'
import { ImgJobTitle } from '@/components/imgs'

type TypeSectionProgramJobTitlesWithoutPicturesProps = TypeClassNames

const SectionProgramJobTitlesWithoutPictures = ({
  classNames
}: TypeSectionProgramJobTitlesWithoutPicturesProps) => {
  const { program } = useContext(ContextProgramContext)

  if (!program?.jobTitles) return <></>

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Кем Вы сможете работать?</GeneralSectionTitle>
        <ul className={stls.jobTitles}>
          {program.jobTitles
            .filter(jobTitle => jobTitle?.picture && jobTitle?.position)
            .map((jobTitle, idx) => (
              <li
                key={(jobTitle.position || 'SectionProgramJobTitle') + idx}
                className={stls.jobTitle}>
                <h3 className={stls.position}>{jobTitle.position}</h3>
              </li>
            ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionProgramJobTitlesWithoutPictures
